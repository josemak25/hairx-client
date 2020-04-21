import React, { useRef } from 'react';
import PhoneInput from 'react-native-phone-input';

import { Container, Info, Text } from './style';
export default function InputCountry() {
  const phone = useRef();
  return (
    <Container>
      {/* country select here library*/}
      <Text>What's your number?</Text>
      {/* input phone number library*/}
      <PhoneInput ref={phone} />
    </Container>
  );
}
