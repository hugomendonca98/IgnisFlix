import styled from 'styled-components';

import backgroundImage from '@/../public/images/background.jpeg';

export const ContentContainer = styled.div`
  width: 90%;
  margin: auto;

  & > p {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--gray);
    margin: 30px 0px 30px 0px;

    span {
      color: var(--white);
    }
  }

  & > h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 28px 0px 40px 0px;
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

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  padding-bottom: 24px;
`;
