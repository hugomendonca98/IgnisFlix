import { getSession, signOut } from 'next-auth/react';
import { GetServerSideProps } from 'next';

import Header from '@/components/Header';
import Input from '@/components/Input';
import {
  ContentContainer,
  BackgroundContainer,
  CardsContainer,
  ButtonContainer,
} from '@/styles/Movies';

import iconSearch from '@/../public/images/search.png';
import MovieCard from '@/components/MovieCard';
import posterNotFound from '@/../public/images/poster.png';
import backdropNotFound from '@/../public/images/backdrop.png';

import api from '@/services/api';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/Button';

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
  page: string;
}

export default function Movies({
  user,
  isValidToken,
  movies,
  page,
}: MoviesProps) {
  if (!isValidToken) {
    signOut({ redirect: true, callbackUrl: '/account/signin' });
  }

  const router = useRouter();

  const [search, setSearch] = useState('');
  const [movieExpandId, setMovieExpandId] = useState<number>();

  function handleSearch() {
    router.push(`/movies?search=${encodeURIComponent(search)}&page=${1}`);
  }

  /**
   * Preferi realizar dessa forma para que todas as páginas de resultados
   * possam ter um desempenho de SEO melhor.
   * --------------------------------------------------------------------
   Poderia Realizar também apenas a primeira página em SSR e o restante
   das páginas "Ver mais" em cliente side, assim apenas ir adicionando
   novos filmes a listagem.
   */
  function handleNextPage() {
    router.push(
      `/movies?search=${encodeURIComponent(search)}&page=${Number(page) + 1}`,
    );
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  function handleExpand(id: number) {
    setMovieExpandId(id);
    window.scrollTo(0, 235);
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
            keyHandle={e => handleKeyPress(e)}
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
                  !movie.poster_path ||
                  movie.poster_path === 'https://image.tmdb.org/t/p/w500/null'
                    ? posterNotFound.src
                    : movie.poster_path
                }
                imageExpandUrl={
                  !movie.backdrop_path ||
                  movie.backdrop_path === 'https://image.tmdb.org/t/p/w500/null'
                    ? backdropNotFound.src
                    : movie.backdrop_path
                }
                handleDetail={() =>
                  handleExpand(movieExpandId === movie.id ? -1 : movie.id)
                }
                expand={movieExpandId === movie.id}
              />
            ))}
          </CardsContainer>
          <ButtonContainer>
            <Button type="button" onClick={() => handleNextPage()}>
              Ver mais
            </Button>
          </ButtonContainer>
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

  console.log(typeof page);

  let movies = [];
  let isValidToken = true;

  try {
    const response = await api.get(
      `/movies?query=${search ? `${search}` : ''}&page=${page ? page : ''}`,
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
      page: page ? page : '1',
    },
  };
};
