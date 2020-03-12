import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface SplashScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Splash(props: SplashScreenProp) {
  return (
    <Container>
      <Welcome>Splash Screen</Welcome>
      <Button title="Splash screen button" />
    </Container>
  );
}
