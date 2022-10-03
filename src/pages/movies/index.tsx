import Header from '@/components/Header';
import Input from '@/components/Input';
import {
  ContentContainer,
  BackgroundContainer,
  CardsContainer,
} from '@/styles/Movies';

import iconSearch from '@/../public/images/search.png';
import MovieCard from '@/components/MovieCard';

export default function Movies() {
  return (
    <>
      <BackgroundContainer>
        <Header align="row" backButton={true} />
        <ContentContainer>
          <p>
            Bem vindo<span>, Hugo Mendonça</span>
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
