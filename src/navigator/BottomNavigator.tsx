import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useThemeContext } from '../theme';
import Screens from '../screens';
import HomeNavigator from './HomeNavigator';

import HomeIcon from '../../assets/icons/home';
import CommunityIcon from '../../assets/icons/community';
import CommunityNavigator from './CommunityNavigator';
import UserIcon from '../../assets/icons/user';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const { colors } = useThemeContext();

  return (
    <Tab.Navigator
      activeColor={colors.ACTIVE_TAB_COLOR}
      inactiveColor={colors.INACTIVE_ICON_COLOR}
      barStyle={{ backgroundColor: colors.BG_LIGHT_COLOR }}
      initialRouteName="HomeScreen"
      labeled={false}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon fillColor={color} />
        }}
      />

      <Tab.Screen
        name="CommunityScreen"
        component={CommunityNavigator}
        options={{
          tabBarIcon: ({ color }) => <CommunityIcon fillColor={color} />
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={Screens.ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <UserIcon fillColor={color} />
        }}
      />
    </Tab.Navigator>
  );
}
