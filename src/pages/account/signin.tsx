import { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Header from '@/components/Header';
import Input from '@/components/Input';
import Button from '@/components/Button';

import {
  BackgroundContainer,
  ContentContainer,
  FixedContent,
} from '@/styles/SignIn';

import iconPassSlash from '@/../public/images/slash-eye.png';
import iconPass from '@/../public/images/basic-eye.png';

import { getSession, signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface SigninCredentials {
  email: string;
  password: string;
}

interface SignInProps {
  error: string;
}

export default function SignIn({ error }: SignInProps) {
  const [isShownPass, setIsSHownPass] = useState(false);

  useEffect(() => {
    if (error && !toast.isActive(error)) {
      console.log(error);
      toast.error('Erro ao tentar realizar o login, tente novamente.', {
        toastId: error,
      });
    }
  }, [error]);

  const signinSchema = Yup.object().shape({
    email: Yup.string()
      .email('Formato do e-mail Invalido.')
      .required('Campo e-mail obrigatório.'),
    password: Yup.string().required('Campo senha obrigatório.'),
  });

  const formik = useFormik({
    validationSchema: signinSchema,
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      handleSignin(values);
    },
  });

  const handleShowPass = () => {
    setIsSHownPass(!isShownPass);
  };

  const handleSignin = useCallback(async (values: SigninCredentials) => {
    const res = await signIn('credentials', {
      redirect: true,
      ...values,
      callbackUrl: '/movies',
    });

    if (res?.error) {
      if (res.status === 401) {
        toast.error('Combinação de login invalida, tente novamente.');
      } else {
        toast.error('Ocorreu um erro ao realizar o login.');
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Entrar | IgnisFlix</title>
      </Head>
      <BackgroundContainer>
        <Header />
        <main>
          <ContentContainer
            onSubmit={e => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
            noValidate
          >
            <label>Email / Username</label>
            <Input
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && <span>{formik.errors.email}</span>}
            <label>Senha</label>
            <Input
              name="password"
              type={isShownPass ? 'text' : 'password'}
              icon={isShownPass ? iconPass : iconPassSlash}
              iconHandle={handleShowPass}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && <span>{formik.errors.password}</span>}
            <FixedContent>
              <Button type="submit">Entrar</Button>
            </FixedContent>
          </ContentContainer>
        </main>
      </BackgroundContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const session = await getSession({ req });

  const { error } = query;

  if (error) {
    return {
      props: {
        error,
      },
    };
  }

  if (session?.user) {
    return {
      redirect: {
        destination: '/movies',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
