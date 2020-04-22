import React, { Dispatch } from 'react';

import Button from '../../../../../components/button';
import { Container, Text, ButtonStyle } from './style';
import { NavigationInterface } from '../../../../types';

interface Iprops {
  context?: string;
  onPress?: () => void | boolean;
  setVisibility?: Dispatch<boolean>;
}

export default function CountryDisplay(props: Iprops) {
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
