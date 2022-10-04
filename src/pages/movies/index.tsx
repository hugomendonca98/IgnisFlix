import { getSession, signOut } from 'next-auth/react';
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
import posterNotFound from '@/../public/images/poster.png';
import backdropNotFound from '@/../public/images/backdrop.png';

import api from '@/services/api';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

interface MoviesData {
  adult: boolean;
  release_date: string;
  backdrop_path: string;
  genre_ids: number[];
  video: true;
  original_language: string;
  popularity: number;
  vote_average: number;
  title: string;
  vote_count: number;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
}

interface MoviesProps {
  user: {
    email: string;
    name: string;
  };
  isValidToken: boolean;
  movies: MoviesData[];
}

export default function Movies({ user, isValidToken, movies }: MoviesProps) {
  if (!isValidToken) {
    signOut({ redirect: true, callbackUrl: '/account/signin' });
  }

  const router = useRouter();
  const [search, setSearch] = useState('');

  function handleSearch() {
    console.log('sim');

    router.push(`/movies?search=${encodeURIComponent(search)}`);

    setSearch('');
  }

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
            value={search}
            onChange={e => setSearch(e.target.value)}
            iconHandle={() => handleSearch()}
          />
          <h1>Filmes</h1>
          <CardsContainer>
            {movies.map(movie => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                description={movie.overview}
                stats={Number(movie.vote_average.toString().replace('.', ''))}
                imageUrl={
                  movie.poster_path ===
                    'https://image.tmdb.org/t/p/w500/null' || !movie.poster_path
                    ? posterNotFound.src
                    : movie.poster_path
                }
                imageExpandUrl={
                  movie.backdrop_path ===
                    'https://image.tmdb.org/t/p/w500/null' ||
                  !movie.backdrop_path
                    ? backdropNotFound.src
                    : movie.backdrop_path
                }
              />
            ))}
          </CardsContainer>
        </ContentContainer>
      </BackgroundContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
  params,
}) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: '/account/signin',
        permanent: false,
      },
    };
  }
  const { page, search } = query;

  let movies = [];
  let isValidToken = true;

  console.log(page, search);

  try {
    const response = await api.get(
      `/movies${search ? `?query=${search}` : ''}`,
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      },
    );

    movies = response.data.results;
  } catch (error: any) {
    if (error.response.status === 401) {
      isValidToken = false;
    }
    console.log(error.message);
  }

  return {
    props: {
      user: session.user,
      movies,
      isValidToken,
    },
  };
};
