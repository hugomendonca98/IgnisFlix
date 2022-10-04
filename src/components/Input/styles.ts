import styled from 'styled-components';

interface InputContainerProps {
  isFocused: boolean;
  borderRadius: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  background: var(--black);
  height: 46px;
  margin: auto;
  border-radius: ${props => props.borderRadius};
  border: ${props => (props.isFocused ? '1px solid var(--blue)' : 'none')};

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background: transparent !important;
    all: unset;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 0.75rem;
    color: var(--gray);
    font-family: Helvetica, sans-serif;
    font-weight: 400;
    line-height: 14.32px;
    margin: 15px;

    &:-webkit-autofill,
    &:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
    &[data-autocompleted] {
      background-color: transparent !important;
    }
  }

  div {
    margin: 0px 15px 0px 12px;
    cursor: pointer;
    opacity: 30%;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
