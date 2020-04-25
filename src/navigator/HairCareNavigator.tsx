import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';

const HairCareStack = createStackNavigator();

export default function HairCareNavigator() {
  return (
    <HairCareStack.Navigator
      initialRouteName="HairCareHome"
      headerMode="screen"
      mode="modal"
      screenOptions={{ headerShown: false }}
    >
      <HairCareStack.Screen
        name="HairCareHome"
        component={Screens.HairCareScreen}
      />
    </HairCareStack.Navigator>
  );
}
