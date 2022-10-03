import styled from 'styled-components';

import backgroundImage from '@/../public/images/background.jpeg';

export const ContentContainer = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
  margin-top: 45px;

  label {
    margin: 8px 0px 8px 0px;
    display: inline-block;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const BackgroundContainer = styled.div`
  height: 100vh;
  -webkit-box-shadow: inset 0px -16vh 50px 24px #000000;
  box-shadow: inset 0px -16vh 50px 24px #000000;

  background-image: url(${backgroundImage.src});
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
`;

export const FixedContent = styled.div`
  position: fixed;
  bottom: 10vh;
  width: 100%;
`;
