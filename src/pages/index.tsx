import type { NextPage } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import { ContentContainer } from '@/styles/Home';

import personaImage from '../../public/images/persona.png';

const Home: NextPage = () => {
  return (
    <>
      <Header backButton={false} />
      <ContentContainer>
        <main>
          <h1>Do sofá pro seu celular</h1>
          <p>A revolução do cinema na sua casa.</p>

          <Image src={personaImage} alt="Pessoa segurando um celular." />

          <a href="#">Começar a ver filmes</a>
        </main>
      </ContentContainer>
    </>
  );
};

export default Home;
