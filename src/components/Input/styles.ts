import styled from 'styled-components';

interface InputContainerProps {
  isFocused: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  background: var(--black);
  height: 46px;
  margin: auto;
  border-radius: 8px;
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
    font-size: 1rem;
    color: var(--gray);
    font-family: 'Helvetica Neue';
    line-height: 14.32px;
    margin: 5px;

    &:-webkit-autofill,
    &:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
    &[data-autocompleted] {
      background-color: transparent !important;
    }
  }

  div {
    margin: 0px 12px 0px 12px;
    cursor: pointer;
  }
`;
