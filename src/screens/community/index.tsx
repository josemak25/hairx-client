import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface CommunityScreenProp extends NavigationInterface {
  testID?: string;
}

export default function CommunityScreen(props: CommunityScreenProp) {
  return (
    <Container>
      <Button title="Community screen button" />
      <Welcome>Community Screen</Welcome>
    </Container>
  );
}
