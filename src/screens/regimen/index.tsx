import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface RegimenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenScreen(props: RegimenScreenProp) {
  const { navigation } = props;

  return (
    <Container>
      <Button
        title="Regimen screen button"
        onPress={() => navigation.navigate('RegimenSetupScreen')}
      />
      <Welcome>Regimen Screen</Welcome>
    </Container>
  );
}
