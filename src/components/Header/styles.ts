import styled from 'styled-components';

interface HeaderContainerProps {
  align: 'row' | 'column';
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.align};
  justify-content: center;
  padding-top: 25px;

  button {
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
  }
`;
