import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface CartScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Cart(props: CartScreenProp) {
  return (
    <Container>
      <Button title="Cart screen button" />
      <Welcome>Cart Screen</Welcome>
    </Container>
  );
}
