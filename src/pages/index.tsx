import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header';
import {
  BackgroundContainer,
  BackgroundPersonaLight,
  ContentContainer,
} from '@/styles/Home';

import personaImage from '../../public/images/persona.png';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | IgnisFlix</title>
      </Head>
      <BackgroundContainer>
        <BackgroundPersonaLight>
          <Header backButton={false} />
          <ContentContainer>
            <main>
              <h1>Do sofá pro seu celular</h1>
              <p>A revolução do cinema na sua casa.</p>
              <Image src={personaImage} alt="Pessoa segurando um celular." />
              <Link href="/account/signin">Começar a ver filmes</Link>
            </main>
          </ContentContainer>
        </BackgroundPersonaLight>
      </BackgroundContainer>
    </>
  );
};

export default Home;
