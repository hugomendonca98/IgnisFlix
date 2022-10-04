import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
  background?: string;
}

export default function Button({
  children,
  background = '#F52D2D',
  color = '#FFFFFF',
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer color={color} background={background} {...rest}>
      {children}
    </ButtonContainer>
  );
}
