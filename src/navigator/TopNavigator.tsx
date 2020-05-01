import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screens from '../screens/regimen/screens';

const TopNavigator = createMaterialTopTabNavigator();

export default function RegimenTopNavigatot() {
  return (
    <TopNavigator.Navigator initialRouteName="Routine">
      <TopNavigator.Screen name="Routine" component={Screens.Routine} />
      <TopNavigator.Screen name="Foods" component={Screens.Routine} />
      <TopNavigator.Screen name="Saloon visits" component={Screens.Routine} />
    </TopNavigator.Navigator>
  );
}
