//@ts-nocheck
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Screens from '../screens';
import { useThemeContext } from '../theme';
import { useStoreContext } from '../store';
import HomeIcon from '../../assets/icons/home-icon';
import ProfileIcon from '../../assets/icons/profile-icon';
import CartIcon from '../../assets/icons/cart-icon';

import { TabBarLabel, CartContainer, CartNotification } from './styles';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const { colors } = useThemeContext();
  const {
    state: { cartState }
  } = useStoreContext();

  return (
    <Tab.Navigator
      activeColor={colors.ACTIVE_TAB_ICON_COLOR}
      inactiveColor={colors.ACTIVE_TAB_ICON_COLOR}
      barStyle={{ backgroundColor: colors.BG_LIGHT_COLOR }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Screens.HomeScreen}
        options={{
          tabBarLabel: <TabBarLabel>home</TabBarLabel>,
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon fillColor={color} isFocused={focused} />
          )
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={Screens.CartScreen}
        options={{
          tabBarLabel: <TabBarLabel>cart</TabBarLabel>,
          tabBarIcon: ({ color }) => (
            <CartContainer>
              {cartState.cart.length ? <CartNotification /> : null}
              <CartIcon fillColor={color} />
            </CartContainer>
          )
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Screens.ProfileScreen}
        options={{
          tabBarLabel: <TabBarLabel>profile</TabBarLabel>,
          tabBarIcon: ({ color, focused }) => (
            <ProfileIcon fillColor={color} isFocused={focused} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
