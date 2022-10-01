import styled from 'styled-components';

interface ButtonProps {
  color: string;
  background: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: inline-block;
  width: 90%;
  padding: 15px 0 15px 0;
  margin-top: 4vh;
  border: none;
  border-radius: 8px;
  background: ${props => props.background};
  color: ${props => props.color};
  text-align: center;

  font-weight: 700;
  font-size: 1rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
