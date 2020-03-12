import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface SplashScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Home() {
  return (
    <Container>
      <Button title="Home screen button" />
      <Welcome>Home Screen</Welcome>
    </Container>
  );
}
