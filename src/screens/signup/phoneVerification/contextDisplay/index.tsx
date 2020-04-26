import React, { Dispatch } from 'react';

import { Container, Text, Change } from './style';

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
        <Text style={{ opacity: 1 }}>Change</Text>
      </Change>
    </Container>
  );
}
