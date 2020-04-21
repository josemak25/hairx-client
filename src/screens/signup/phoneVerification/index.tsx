import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, Header, Navinfo } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import InputCountry from './verification/country';
import InputOTP from './verification/otp';

export default function Phoneverify() {
  return (
    <Container>
      <Header>VERIFY YOUR IDENTITY</Header>
      <ScrollView pagingEnabled={true}>
        <InputCountry />
        <InputOTP />
      </ScrollView>
    </Container>
  );
}
