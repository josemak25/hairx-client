import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';
import BottomNavigator from './BottomNavigator';

const RegimenStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <RegimenStack.Navigator
      // initialRouteName="RegimenScreen"
      initialRouteName="ProceedHomeScreen"
      headerMode="screen"
      mode="modal"
      screenOptions={{ headerShown: false }}
    >
      {/* <RegimenStack.Screen name="RegimenScreen" component={BottomNavigator} /> */}
      <RegimenStack.Screen
        name="ProceedHomeScreen"
        component={Screens.ProceedHomeScreen}
      />

      <RegimenStack.Screen
        name="RegimenSetupScreen"
        component={Screens.RegimenSetupScreen}
      />
    </RegimenStack.Navigator>
  );
}
