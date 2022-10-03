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
        const res = await api.post('/login', {
          email: credentials?.email,
          password: credentials?.password,
        });

        if (res.statusText !== 'OK') {
          console.log('caiu');
          throw new Error('A error is ocurred on auth.');
        }

        if (res.data.accessToken && res.data.user) {
          return res.data;
        }
        return null;
      },
    }),
  ],

  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/account/signin',
  },
  callbacks: {
    jwt({ token, user, account, profile, isNewUser }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.accessTokenExpires = token.accessTokenExpires;

      return session;
    },
  },
});
