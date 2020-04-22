import React, { useRef } from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';
import Phoneverify from './phoneVerification';
import { ScrollView } from 'react-native';

interface SignupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SignupScreen(props: SignupScreenProp) {
  const scrollRef = useRef<ScrollView>(null);

  return (
    <Container>
      <ScrollView horizontal={true} pagingEnabled={true} ref={scrollRef}>
        {data.map((item, ind) => (
          <Phoneverify
            key={ind}
            scroll={scrollRef}
            buttonText={item.buttonText}
            context={item.context}
            header="VERIFY YOUR IDENTITY"
            subtitle={item.subtitle}
          />
        ))}
      </ScrollView>
    </Container>
  );
}

const data = [
  {
    buttonText: 'Text me OTP',
    context: 'country',
    subtitle: 'Provide your phone number to receive an OTP via text message'
  },
  {
    buttonText: 'Verify',
    context: 'otp',
    subtitle:
      'We have sent a text message with your OTP to your phone, provide it here'
  }
];
