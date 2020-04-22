import React, { Dispatch } from 'react';
import Button from '../../../../../components/button';

import { Container, Text, ButtonStyle } from './style';

interface Iprops {
  country?: string;
  context?: string;
  goBack?: () => void;
  setVisibility?: Dispatch<boolean>;
}

export default function CountryDisplay(props: Iprops) {
  const togglePress = () => {
    switch (props.context) {
      case 'country':
        props.setVisibility(true);
        return;
      case 'otp':
        props.goBack();
    }
  };
  return (
    <Container>
      <Text>{props.country}</Text>
      <Button
        title="Change"
        buttonStyle={ButtonStyle.Mainbutton}
        textStyle={ButtonStyle.textStyle}
        onPress={togglePress}
      />
    </Container>
  );
}
