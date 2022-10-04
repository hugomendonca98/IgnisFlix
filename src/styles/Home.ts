import styled from 'styled-components';

import personaBg from '@/../public/images/persona-bg.png';

import backgroundImage from '@/../public/images/background.jpeg';

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 500px;

  main {
    margin-top: 66px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1,
    p {
      text-align: center;
    }

    p {
      margin: 5px 0 15px 0;
      color: var(--gray);
      font-weight: bold;
      font-family: Helvetica, sans-serif;
      font-size: 0.75rem;
    }

    a {
      display: inline-block;
      width: 90%;
      padding: 15px 0 15px 0;
      margin-top: 4vh;
      border-radius: 8px;
      background: var(--primary-red);
      text-align: center;

      font-weight: 700;
      font-size: 1rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export const BackgroundContainer = styled.div`
  min-height: 100vh;

  background-image: url(${backgroundImage.src});
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;

  -webkit-box-shadow: inset 0px -16vh 50px 24px #000000;
  box-shadow: inset 0px -16vh 50px 24px #000000;
`;

export const BackgroundPersonaLight = styled.div`
  background-image: url(${personaBg.src});
  background-position: center;
  background-repeat: no-repeat;
`;
