import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ImageSourcePropType } from 'react-native';

import {
  CardContainer,
  Context,
  Time,
  Image,
  Text,
  Heading,
  Content
} from './style';

interface CardProps {
  time: string;
  order: number;
  image: ImageSourcePropType;
  content: string;
  heading: string;
}

export default function Card(props: CardProps) {
  const [state, setstate] = useState<'row' | 'row-reverse'>('row');

  useEffect(() => {
    if (props.order === 1) {
      setstate('row-reverse')
    }
  }, [])


  return (
    <CardContainer style={{
      flexDirection: state
    }}>
      <Image source={props.image} />

      <Context >
        <Time>
          <Ionicons />
          <Text>{props.time}</Text>
        </Time>
        <Heading>{props.heading}</Heading>
        <Content>{props.content}</Content>
      </Context>
    </CardContainer>
  );
}
