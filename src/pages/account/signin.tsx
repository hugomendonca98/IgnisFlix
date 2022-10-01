import { useState } from 'react';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Button from '@/components/Button';

import {
  BackgroundContainer,
  ContentContainer,
  FixedContent,
} from '@/styles/SignIn';

import iconPassSlash from '@/../public/images/slash-eye.png';
import iconPass from '@/../public/images/basic-eye.png';

export default function SignIn() {
  const [isShownPass, setIsSHownPass] = useState(false);

  const handleShowPass = () => {
    setIsSHownPass(!isShownPass);
  };

  return (
    <BackgroundContainer>
      <Header />
      <main>
        <ContentContainer>
          <label>Email / Username</label>
          <Input name="email" type="email" />
          <label>Senha</label>
          <Input
            name="password"
            type={isShownPass ? 'text' : 'password'}
            icon={isShownPass ? iconPass : iconPassSlash}
            iconHandle={handleShowPass}
          />
          <FixedContent>
            <Button>Entrar</Button>
          </FixedContent>
        </ContentContainer>
      </main>
    </BackgroundContainer>
  );
}
