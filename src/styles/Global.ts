import { createGlobalStyle } from 'styled-components';

import backgroundImage from '../../public/images/background.jpeg';

export const GlobalStyles = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

  :root {
    --primary-red: #F52D2D;
    --blue: #3A2FAF;
    --white: #FFFFFF;
    --gray: #A8A8A8;
    --black: #282828;
    --gradient: linear-gradient(215.46deg, #F52D2D 17.76%, #3A2FAF 85.58%);
  }

  body {
    font-family: Helvetica, sans-serif;
    font-size: 0.75rem;
    color: var(--white);

    background-image: url(${backgroundImage.src});
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;

    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem Helvetica, sans-serif;
  }

  // acessibilidade no zom da font;
  @media (max-width: 1000px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
