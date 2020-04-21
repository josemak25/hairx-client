import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, Header, Subtitle } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import InputCountry from './verification/country';
import InputOTP from './verification/otp';

interface Iprops {
  header?: string;
  context?: string;
  subtitle?: string;
}
export default function Phoneverify(props: Iprops) {
  return (
    <Container>
      <Header>VERIFY YOUR IDENTITY</Header>
      <Subtitle>{props.subtitle}</Subtitle>
      <InputCountry />
      <InputOTP />
    </Container>
  );
}
