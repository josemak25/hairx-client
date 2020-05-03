import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { useThemeContext } from '../theme';
import Screens from '../screens';
import RegimenIcon from '../../assets/icons/regimen';
import HairCareIcon from '../../assets/icons/hair_care';
import SettingIcon from '../../assets/icons/settings';
import HomeTopNavigator from './HomeTopNavigator';
import TabBarLabel from '../commons/header/tab-bar-label';
import { IconContainer } from './styles';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const { colors } = useThemeContext();

  return (
    <Tab.Navigator
      activeColor={colors.ACTIVE_ICON_COLOR}
      inactiveColor={colors.INACTIVE_FIELD_COLOR}
      barStyle={{ backgroundColor: colors.INPUT_FIELD_COLOR }}
      initialRouteName="HomeTopNavigator"
      labeled={false}
    >
      <Tab.Screen
        name="HomeTopNavigator"
        component={HomeTopNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <RegimenIcon fillColor={color} isFocused={focused} />
              <TabBarLabel label="Regimen" {...{ color, focused }} />
            </IconContainer>
          )
        }}
      />

      <Tab.Screen
        name="HairCareScreen"
        component={Screens.HairCareScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <HairCareIcon fillColor={color} isFocused={focused} />
              <TabBarLabel label="Hair care" {...{ color, focused }} />
            </IconContainer>
          )
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Screens.SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <SettingIcon fillColor={color} isFocused={focused} />
              <TabBarLabel label="Settings" {...{ color, focused }} />
            </IconContainer>
          )
        }}
      />
    </Tab.Navigator>
  );
}
