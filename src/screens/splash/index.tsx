import React, { useEffect } from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface SplashScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Splash({ navigation }: SplashScreenProp) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);
  }, []);

  return (
    <Container>
      <Welcome>Splash Screen</Welcome>
      <Button title="Splash screen button" />
    </Container>
  );
}
