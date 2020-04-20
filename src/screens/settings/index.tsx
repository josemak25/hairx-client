import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface SettingsScreenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SettingsScreen(props: SettingsScreenScreenProp) {
  return (
    <Container>
      <Button title="Settings screen button" />
      <Welcome>Settings Screen</Welcome>
    </Container>
  );
}
