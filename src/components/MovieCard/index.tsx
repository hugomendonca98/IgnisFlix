import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
  CardImageContainer,
  CardTextContainer,
  ContentContainer,
} from './styles';

import cardImage from '@/../public/images/card.jpg';
import Image from 'next/image';

export default function MovieCard() {
  const GradientSVG = () => (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={'svg-porcent'} gradientTransform={'rotate(90)'}>
          <stop offset="16.29%" stopColor="#F52D2D" />
          <stop offset="85.56%" stopColor="#3A2FAF" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <ContentContainer>
      <CardImageContainer>
        <Image src={cardImage} alt="" />
      </CardImageContainer>

      <CardTextContainer>
        <div className="stats" style={{ height: '40px', width: '40px' }}>
          <GradientSVG />
          <CircularProgressbar
            background={true}
            counterClockwise={true}
            strokeWidth={5}
            value={66}
            text={'66%'}
            styles={{
              path: { stroke: `url(#svg-porcent)`, height: '100%' },
              trail: {
                stroke: '#2e2e2e',
              },
              text: {
                fill: '#fff',
                fontSize: '30px',
              },
              background: {
                fill: '#000',
              },
            }}
          />
        </div>
        <h1>Nome do filme</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
          inventore quod laborum sed necessitatibus similique delectus quidem
          totam eos autem dolorem qui, maiores doloremque sapiente. Modi dolorum
          molestiae aspernatur? Eligendi!
        </p>
        <button>Ver mais</button>
      </CardTextContainer>
    </ContentContainer>
  );
}
