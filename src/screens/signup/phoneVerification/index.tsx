import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, Header, Subtitle } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import InputCountry from './verification/country';
import InputOTP from './verification/otp';
import Button from '../../../components/button';

interface Iprops {
  header?: string;
  context?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function Phoneverify(props: Iprops) {
  const verify = () => {
    switch (props.context) {
      case 'country':
      //save current number to spread in otp screen;
      //check number if valid (create a function), send otp to number
      //slide to  otp screen
      case 'otp':
      //verify
      //if verify is true (create a function to run verify), transition to next screen
      default:
        return;
    }
  };

  return (
    <Container>
      <Header>VERIFY YOUR IDENTITY</Header>
      <Subtitle>{props.subtitle}</Subtitle>
      {props.context === 'country' ? <InputCountry /> : <InputOTP />}
      <Button title={props.buttonText} onPress={verify} />
    </Container>
  );
}
