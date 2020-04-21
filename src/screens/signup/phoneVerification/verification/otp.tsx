import React from 'react';

import { Container, Info, Text } from './style';
export default function InputOTP() {
  return (
    <Container>
      <Info>Provide your phone number to receive an OTP via text message</Info>
      {/* country select here library*/}
      <Text>What's your number?</Text>
      {/* input phone number library*/}
    </Container>
  );
}
