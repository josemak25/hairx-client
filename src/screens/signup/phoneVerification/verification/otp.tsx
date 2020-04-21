import React from 'react';

import { Container, Info, Text } from './style';
export default function InputOTP() {
  return (
    <Container>
      <Info>
        We have sent a text message with your OTP to your phone, provide it here
      </Info>
      {/* country select here library*/}
      <Text>What's your number?</Text>
      {/* input phone number library*/}
    </Container>
  );
}
