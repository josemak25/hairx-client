import React from 'react';

import { Container, Info, Text } from './style';
import CountryDisplay from './countryDisplay';
export default function InputOTP() {
  return (
    <Container>
      <CountryDisplay context="otp" country="+1 234-568-0989" />
      {/* phone number place holder */}
      {/* input phone number library*/}
    </Container>
  );
}
