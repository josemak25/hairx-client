import React, { Fragment } from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import boxShadow from '../../utils/boxShadows';
import EmptyCartIcon from '../../../assets/icons/empty-cart';

import {
  EmptyCartTittle,
  EmptyCartContainer,
  EmptyCartTextContainer,
  EmptyCartDescription,
  EmptyCartTextHolder
} from './styles';

interface EmptyCartProp extends NavigationInterface {
  testID?: string;
}

export default function EmptyCart(props: EmptyCartProp) {
  const { colors } = useThemeContext();

  const continueShopping = () => props.navigation.replace('HomeScreen');

  return (
    <Fragment>
      <EmptyCartContainer>
        <EmptyCartIcon style={{ position: 'absolute', top: 50 }} />
      </EmptyCartContainer>
      <EmptyCartTextContainer>
        <EmptyCartTextHolder>
          <EmptyCartTittle>Your cart is empty</EmptyCartTittle>
          <EmptyCartDescription>
            Looks like you haven’t added anything to your cart yet
          </EmptyCartDescription>
        </EmptyCartTextHolder>
        <Button
          title="Start shopping"
          textStyle={{
            color: colors.ACTION_FONT_COLOR,
            opacity: 0.8
          }}
          buttonStyle={[
            {
              width: '80%',
              height: 65,
              backgroundColor: colors.BG_LIGHT_COLOR,
              bottom: 10
            },
            boxShadow({
              elevation: 4,
              width: 0,
              height: 3,
              shadowColor: colors.FONT_DARK_COLOR,
              shadowOpacity: 0.05,
              shadowRadius: 2
            })
          ]}
          onPress={continueShopping}
        />
      </EmptyCartTextContainer>
    </Fragment>
  );
}
