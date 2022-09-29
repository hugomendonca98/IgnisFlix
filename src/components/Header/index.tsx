import Image from 'next/image';

import { HeaderContainer } from './styles';

import backImage from '../../../public/images/back.png';
import logoImage from '../../../public/images/logo.svg';

interface HeaderProps {
  align?: 'row' | 'column';
  backButton?: boolean;
}

export default function Header({
  align = 'column',
  backButton = true,
}: HeaderProps) {
  return (
    <HeaderContainer align={align}>
      {backButton && (
        <button type="button">
          <Image src={backImage} alt="Botão voltar" />
        </button>
      )}
      <Image src={logoImage} alt="IgnisFlix logo" />
    </HeaderContainer>
  );
}
