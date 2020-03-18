import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface ProfileScreenProp extends NavigationInterface {
  testID?: string;
}

export default function ProfileScreen(props: ProfileScreenProp) {
  return (
    <Container>
      <Button title="Profile screen button" />
      <Welcome>Profile Screen</Welcome>
    </Container>
  );
}
