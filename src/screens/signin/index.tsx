import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface SigninScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SigninScreen(props: SigninScreenProp) {
  return (
    <Container>
      <Button title="Signin screen button" />
      <Welcome>Signin Screen</Welcome>
    </Container>
  );
}
