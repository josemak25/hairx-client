import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface AboutScreenProp extends NavigationInterface {
  testID?: string;
}

export default function AboutUs(props: AboutScreenProp) {
  return (
    <Container>
      <Button title="About Us screen button" />
      <Welcome>About Us Screen</Welcome>
    </Container>
  );
}
