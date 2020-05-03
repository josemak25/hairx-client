import React from 'react';
import { Foundation } from '@expo/vector-icons';

import { useThemeContext } from '../../../theme';
import Image from '../../../libs/responsiveImage/index';
import applyScale from '../../../utils/applyScale';
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
  order: 'row' | 'row-reverse';
  image: string;
  content: string;
  heading: string;
}

export default function Card(props: CardProps) {
  const { fonts, colors } = useThemeContext();

  return (
    <CardContainer style={{ flexDirection: props.order }}>
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
          <Content style={{ fontFamily: fonts.CORMORANT_ITALIC }}>
            see more
          </Content>
        </Content>
      </Context>
    </CardContainer>
  );
}
