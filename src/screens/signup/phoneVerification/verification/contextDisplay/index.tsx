import React, { Dispatch } from 'react';

import Button from '../../../../../components/button';
import { Container, Text, ButtonStyle } from './style';

interface Iprops {
  context?: string;
  onPress?: () => void | boolean;
  setVisibility?: Dispatch<boolean>;
}

export default function ContextDisplay(props: Iprops) {
  return (
    <Container>
      <Text>{props.context}</Text>
      <Button
        title="Change"
        buttonStyle={ButtonStyle.Mainbutton}
        textStyle={ButtonStyle.textStyle}
        onPress={props.onPress}
      />
    </Container>
  );
}
