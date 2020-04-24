import React, { Dispatch } from 'react';

import Button from '../../../../components/button';
import { Container, Text, ButtonStyle, Change } from './style';

interface Iprops {
  context?: string;
  onPress?: () => void | boolean;
  setVisibility?: Dispatch<boolean>;
}

export default function ContextDisplay(props: Iprops) {
  return (
    <Container>
      <Change onPress={props.onPress}>
        <Text>{props.context}</Text>
        <Text>Change</Text>
      </Change>
    </Container>
  );
}
