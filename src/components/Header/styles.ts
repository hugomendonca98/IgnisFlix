import styled, { css } from 'styled-components';

interface HeaderContainerProps {
  align: 'row' | 'column';
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.align};
  justify-content: center;
  align-items: ${props => (props.align === 'column' ? 'normal' : 'center')};
  padding-top: 25px;

  button {
    ${props =>
      props.align === 'row' &&
      css`
        position: absolute;
        left: 0px;
      `}
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
  }
`;
