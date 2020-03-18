import React from 'react';
import { SafeAreaView } from 'react-native';
import Button from '../../components/button';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';
import EmptyCart from './empty-cart';

import { Container } from './styles';

interface CartScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Cart({ navigation }: CartScreenProp) {
  const { colors } = useThemeContext();

  const {
    state: { cartState }
  } = useStoreContext();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.BD_DARK_COLOR }}>
      <Container>
        {cartState.cart.length ? (
          <Button title="nice shoes" />
        ) : (
          <EmptyCart navigation={navigation} />
        )}
      </Container>
    </SafeAreaView>
  );
}
