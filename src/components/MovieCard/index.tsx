import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
  CardImageContainer,
  CardTextContainer,
  ContentContainer,
} from './styles';

import cardImage from '@/../public/images/card.jpg';
import expandImage from '@/../public/images/image1.png';
import Image from 'next/image';

interface MovieCardProps {
  expand?: boolean;
  title: string;
  description: string;
  stats: number;
  handleDetail: () => void;
  imageUrl: string;
  imageExpandUrl: string;
}

export default function MovieCard({
  expand = false,
  title,
  description,
  stats = 0,
  handleDetail,
  imageUrl,
  imageExpandUrl,
}: MovieCardProps) {
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
    <ContentContainer expand={expand}>
      <CardImageContainer>
        <Image
          src={expand ? imageExpandUrl : imageUrl}
          alt=""
          width={expand ? '336px' : '154px'}
          height={expand ? '334px' : '232px'}
        />
      </CardImageContainer>

      <CardTextContainer expand={expand}>
        <div className="stats" style={{ height: '40px', width: '40px' }}>
          <GradientSVG />
          <CircularProgressbar
            background={true}
            counterClockwise={true}
            strokeWidth={5}
            value={stats}
            text={`${stats}%`}
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
        <h1>{title}</h1>
        <p>{description}</p>
      </CardTextContainer>
      <button type="button" onClick={handleDetail}>
        {expand ? 'Ver menos' : 'Ver mais'}
      </button>
    </ContentContainer>
  );
}
