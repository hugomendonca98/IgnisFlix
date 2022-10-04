import styled, { css } from 'styled-components';

interface MovieCardProps {
  expand: boolean;
}

export const ContentContainer = styled.div<MovieCardProps>`
  ${props =>
    props.expand &&
    css`
      order: -1;
    `}
  width: ${props => (props.expand ? '336px' : '154px')};
  height: ${props => (props.expand ? '100%' : '331px')};

  background-color: var(--black);
  overflow: hidden;
  border-radius: 8px;

  & > button {
    position: relative;
    font-size: 0.625rem;
    color: var(--white);
    background: transparent;
    border: none;
    cursor: pointer;
    bottom: ${props => (props.expand ? '10px' : '-10px')};
    margin-top: ${props => (props.expand ? '20px' : '0px')};
    margin-left: ${props => (props.expand ? '85%' : '71%')};

    @media (min-width: 1000px) {
      margin-top: 0px;
      bottom: 5px;
      ${porps =>
        porps.expand &&
        css`
          right: 10px;
        `}
    }
  }
`;

export const CardImageContainer = styled.div`
  overflow: hidden;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const CardTextContainer = styled.div<MovieCardProps>`
  padding: 6px;

  & > div.stats {
    position: relative;
    margin-top: -50px;
  }

  & > h1 {
    font-size: 0.875rem;
    color: var(--white);
    margin: 20px 0px 6px 0px;

    ${props =>
      !props.expand &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      `}
  }

  & > p {
    font-size: 0.75rem;
    color: var(--gray);

    ${props =>
      !props.expand &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      `}
  }
`;
