import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useThemeContext } from '../theme';
import Screens from '../screens';
import HomeNavigator from './HomeNavigator';

import HomeIcon from '../../assets/icons/home';
import UserIcon from '../../assets/icons/user';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const { colors } = useThemeContext();

  return (
    <Tab.Navigator
      activeColor={colors.FONT_DARK_COLOR}
      inactiveColor={colors.FONT_DARK_COLOR}
      barStyle={{ backgroundColor: colors.BG_LIGHT_COLOR }}
      initialRouteName="HomeScreen"
      labeled={false}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon fillColor={color} isFocused={focused} />
          )
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={Screens.ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <UserIcon fillColor={color} isFocused={focused} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
