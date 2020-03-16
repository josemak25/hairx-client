import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface PrivacyScreenProp extends NavigationInterface {
  testID?: string;
}

export default function PrivacyAndPolicy(props: PrivacyScreenProp) {
  return (
    <Container>
      <Button title="Privacy and Policy screen button" />
      <Welcome>Privacy Screen</Welcome>
    </Container>
  );
}
