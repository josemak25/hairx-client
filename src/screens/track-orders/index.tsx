import React, { Fragment } from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface TrackOrdersScreenProp extends NavigationInterface {
  testID?: string;
}

export default function TrackOrders({ navigation }: TrackOrdersScreenProp) {
  return (
    <Container>
      <Button
        title="Go back to previous screen button"
        onPress={() => navigation.goBack()}
      />
      <Welcome>Track Orders Screen</Welcome>
    </Container>
  );
}
