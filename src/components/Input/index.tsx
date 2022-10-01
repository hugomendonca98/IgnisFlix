import Image, { StaticImageData } from 'next/image';
import { InputHTMLAttributes, useCallback, useState } from 'react';
import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: StaticImageData;
  iconHandle?: () => void;
}

export default function Input({ icon, iconHandle, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <InputContainer isFocused={isFocused}>
      <input onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />
      <div>
        {icon && (
          <Image
            src={icon.src}
            alt=""
            width={24}
            height={20}
            onClick={iconHandle}
          />
        )}
      </div>
    </InputContainer>
  );
}
