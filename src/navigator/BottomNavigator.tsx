import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from '../screens';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={Screens.HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="CartScreen"
        component={Screens.CartScreen}
        options={{ title: 'Cart' }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Screens.ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
