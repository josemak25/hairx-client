import React, { FunctionComponent } from 'react';

import { Container } from './styles';

type CardProps = {
  style?: {};
  testID?: string;
  onPress?(): void;
  activeOpacity?: number;
};

const Card: FunctionComponent<CardProps> = props => {
  return <Container {...props}>{props.children}</Container>;
};

export default Card;
