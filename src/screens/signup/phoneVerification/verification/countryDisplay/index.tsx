import React, { Dispatch } from 'react';
import Button from '../../../../../components/button';

import { Container, Text, ButtonStyle } from './style';

interface Iprops {
  country?: string;
  context?: string;
  setVisibility?: Dispatch<boolean>;
}

export default function CountryDisplay(props: Iprops) {
  return (
    <Container>
      <Text>{props.country}</Text>
      <Button
        title="Change"
        buttonStyle={ButtonStyle.Mainbutton}
        textStyle={ButtonStyle.textStyle}
        onPress={() => props.setVisibility(true)}
      />
    </Container>
  );
}
