import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface SignupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SignupScreen(props: SignupScreenProp) {
  return (
    <Container>
      <Button title="Sign up screen button" />
      <Welcome>Signup Screen</Welcome>
    </Container>
  );
}
