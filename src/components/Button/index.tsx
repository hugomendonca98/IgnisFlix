import { ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  children: ReactNode;
  color?: string;
  background?: string;
}

export default function Button({
  children,
  background = '#F52D2D',
  color = '#FFFFFF',
}: ButtonProps) {
  return (
    <ButtonContainer color={color} background={background}>
      {children}
    </ButtonContainer>
  );
}