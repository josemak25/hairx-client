import React, { useState, useEffect } from 'react';
import { Foundation } from '@expo/vector-icons';

import { useThemeContext } from '../../../../theme';
import Image from '../../../../libs/responsiveImage/index';
import applyScale from '../../../../utils/applyScale';
import {
  CardContainer,
  Context,
  Time,
  ResponsiveImage,
  Text,
  Heading,
  Content
} from './style';

interface CardProps {
  time: string;
  order: number;
  image: string;
  content: string;
  heading: string;
}

export default function Card(props: CardProps) {
  const [order, setOrder] = useState<'row' | 'row-reverse'>('row');
  const { fonts, colors } = useThemeContext();

  useEffect(() => {
    if (props.order === 1) {
      setOrder('row-reverse');
    }
  }, []);

  return (
    <CardContainer
      style={{
        flexDirection: order
      }}
    >
      <ResponsiveImage>
        <Image
          imageUrl={props.image}
          height={applyScale(118)}
          width={applyScale(93)}
        />
      </ResponsiveImage>

      <Context>
        <Time>
          <Foundation
            name="clock"
            size={10}
            color={colors.BG_DARK_BLUE_COLOR}
          />
          <Text>{props.time}</Text>
        </Time>
        <Heading>{props.heading}</Heading>
        <Content>
          {props.content}
          <Text
            style={{
              fontFamily: fonts.CORMORANT_ITALIC,
              fontSize: 13,
              color: colors.FONT_DARK_COLOR
            }}
          >
            see more
          </Text>
        </Content>
      </Context>
    </CardContainer>
  );
}
