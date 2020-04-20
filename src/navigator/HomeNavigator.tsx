import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';
import BottomNavigator from './BottomNavigator';

const RegimenStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <RegimenStack.Navigator
      initialRouteName="RegimenScreen"
      headerMode="screen"
      mode="modal"
    >
      <RegimenStack.Screen name="RegimenScreen" component={BottomNavigator} />

      <RegimenStack.Screen
        name="RegimenSetupScreen"
        component={Screens.RegimenSetupScreen}
        options={{ headerShown: false }}
      />
    </RegimenStack.Navigator>
  );
}
