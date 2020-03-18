//@ts-nocheck
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useThemeContext } from '../theme';
import { useStoreContext } from '../store';
import Screens from '../screens';
import HomeIcon from '../../assets/icons/home-icon';
import ProfileIcon from '../../assets/icons/profile-icon';
import CartIcon from '../../assets/icons/cart-icon';

import { TabBarLabel, CartContainer, CartNotification } from './styles';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator(props) {
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
        name="Cart"
        children={() => null}
        options={{
          tabBarLabel: <TabBarLabel>cart</TabBarLabel>,
          tabBarIcon: ({ color, focused }) => {
            const tabState = props.route.state;

            if (tabState) {
              const { history } = tabState;
              const [previousScreen] = history[history.length - 2]['key'].split(
                '-'
              );

              if (focused && tabState.index === 1) {
                props.navigation.navigate('CartScreen');
                props.route.state.index =
                  previousScreen === 'HomeScreen' ? 0 : 2;
              }
            }
            return (
              <CartContainer>
                {cartState.cart.length ? <CartNotification /> : null}
                <CartIcon fillColor={color} />
              </CartContainer>
            );
          }
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
