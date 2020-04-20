import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface HairCareScreenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function HairCareScreen(props: HairCareScreenScreenProp) {
  return (
    <Container>
      <Button title="Hair care screen button" />
      <Welcome>Hair Care Screen</Welcome>
    </Container>
  );
}
