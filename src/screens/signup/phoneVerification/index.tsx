import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, Dimensions } from 'react-native';

import {
  Container,
  Header,
  Subtitle,
  GoBack,
  ButtonStyle,
  Navigate,
  Text
} from './style';
import InputCountry from './verification/countryInput/country';
import InputOTP from './verification/otpInput/otp';
import Button from '../../../components/button';

const { width } = Dimensions.get('screen');

interface Iprops {
  header?: string;
  scroll?: any;
  index?: number;
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
        props.scroll.current.scrollTo({ x: width * (props.index + 1) });
      case 'otp':
      //verify
      //if verify is true (create a function to run verify), transition to next screen
      default:
        return;
    }
  };

  const goBack = () => {
    props.scroll.current.scrollTo({
      // x:d width
    });
  };

  return (
    <Container>
      <Navigate>
        <GoBack onPress={goBack}>
          <AntDesign name="left" size={18} />
        </GoBack>
        <Text>4 of 4</Text>
      </Navigate>
      <Header>VERIFY YOUR IDENTITY</Header>
      <Subtitle>{props.subtitle}</Subtitle>
      {props.context === 'country' ? <InputCountry /> : <InputOTP />}
      <Button
        buttonStyle={ButtonStyle.mainButton}
        textStyle={ButtonStyle.textStyle}
        title={props.buttonText}
        onPress={verify}
      />
    </Container>
  );
}
