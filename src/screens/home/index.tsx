import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface HomeScreenProp extends NavigationInterface {
  testID?: string;
}

export default function HomeScreen(props: HomeScreenProp) {
  return (
    <Container>
      <Button title="Home screen button" />
      <Welcome>Home Screen</Welcome>
    </Container>
  );
}
