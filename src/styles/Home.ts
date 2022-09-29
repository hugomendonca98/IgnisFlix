import styled from 'styled-components';

import personaBg from '../../public/images/persona-bg.png';

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 500px;

  background-image: url(${personaBg.src});
  background-position: center;
  background-repeat: no-repeat;

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
    }

    a {
      background: var(--primary-red);
      width: 90%;
      padding: 15px 0 15px 0;
      text-align: center;
      border-radius: 8px;
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;
