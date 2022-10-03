import { getSession, useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

import Header from '@/components/Header';
import Input from '@/components/Input';
import {
  ContentContainer,
  BackgroundContainer,
  CardsContainer,
} from '@/styles/Movies';

import iconSearch from '@/../public/images/search.png';
import MovieCard from '@/components/MovieCard';

interface MoviesProps {
  user: {
    email: string;
    name: string;
  };
}

export default function Movies({ user }: MoviesProps) {
  return (
    <>
      <BackgroundContainer>
        <Header align="row" backButton={true} />
        <ContentContainer>
          <p>
            Bem vindo<span>, {user.name}</span>
          </p>
          <Input
            name="search"
            icon={iconSearch}
            placeholder="Buscar filme"
            borderRadius="39px"
            iconHeight={23}
          />
          <h1>Filmes</h1>
          <CardsContainer>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </CardsContainer>
        </ContentContainer>
      </BackgroundContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: '/account/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
};
