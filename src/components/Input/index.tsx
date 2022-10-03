import Image, { StaticImageData } from 'next/image';
import { InputHTMLAttributes, useCallback, useState } from 'react';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: StaticImageData;
  iconWidth?: number;
  iconHeight?: number;
  iconHandle?: () => void;
  borderRadius?: string;
}

export default function Input({
  icon,
  iconWidth = 24,
  iconHeight = 20,
  iconHandle,
  borderRadius = '8px',
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <InputContainer isFocused={isFocused} borderRadius={borderRadius}>
      <input onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />
      <div>
        {icon && (
          <Image
            src={icon.src}
            alt=""
            width={iconWidth}
            height={iconHeight}
            onClick={iconHandle}
          />
        )}
      </div>
    </InputContainer>
  );
}
