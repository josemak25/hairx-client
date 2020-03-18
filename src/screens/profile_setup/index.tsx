import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface ProfileSetupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function ProfileSetupScreen(props: ProfileSetupScreenProp) {
  return (
    <Container>
      <Button title="Profile setup screen button" />
      <Welcome>Profile Setup Screen</Welcome>
    </Container>
  );
}
