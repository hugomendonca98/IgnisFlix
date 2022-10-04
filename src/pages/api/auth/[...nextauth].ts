import api from '@/services/api';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    Credentials({
      id: 'credentials',
      name: 'ignisflix',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials, req) {
        try {
          const res = await api.post('/login', {
            email: credentials?.email,
            password: credentials?.password,
          });

          if (res) {
            const userAccount = {
              id: res.data.user.id,
              name: res.data.user.name,
              email: res.data.user.email,
              token: res.data.accessToken.token,
            };

            return userAccount;
          } else {
            return null;
          }
        } catch (error: any) {
          throw new Error(error.code);
        }
      },
    }),
  ],

  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/account/signin',
    error: '/account/signin',
  },
  callbacks: {
    jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.accessToken = user.token;
      }

      return token;
    },

    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.accessTokenExpires = token.accessTokenExpires;

      return session;
    },
  },
});
