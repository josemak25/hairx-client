import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface GetStartedScreenProp extends NavigationInterface {
  testID?: string;
}

export default function GetStartedScreen(props: GetStartedScreenProp) {
  return (
    <Container>
      <Button title="Get started screen button" />
      <Welcome>Get Started Screen</Welcome>
    </Container>
  );
}
