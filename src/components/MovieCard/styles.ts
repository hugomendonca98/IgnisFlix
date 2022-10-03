import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 154px;
  height: 331px;
  background-color: var(--black);
  overflow: hidden;
  border-radius: 8px;
`;

export const CardImageContainer = styled.div`
  width: 154px;
  height: 232px;
  overflow: hidden;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const CardTextContainer = styled.div`
  padding: 6px;

  & > div.stats {
    position: relative;
    margin-top: -50px;
  }

  & > h1 {
    font-size: 0.875rem;
    color: var(--white);
    margin: 20px 0px 6px 0px;
  }

  & > p {
    font-size: 0.625rem;
    color: var(--gray);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  & > button {
    font-size: 0.625rem;
    color: var(--white);
    background: transparent;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 71%;
  }
`;
