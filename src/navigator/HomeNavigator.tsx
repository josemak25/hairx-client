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
      screenOptions={{ headerShown: false }}
    >
      <RegimenStack.Screen name="RegimenScreen" component={BottomNavigator} />

      <RegimenStack.Screen
        name="FoodDetailsScreen"
        component={Screens.FoodDetailsScreen}
      />

      <RegimenStack.Screen
        name="RegimenSetupScreen"
        component={Screens.RegimenSetupScreen}
      />

      <RegimenStack.Screen
        name="ResumeScreen"
        component={Screens.ResumeScreen}
      />
    </RegimenStack.Navigator>
  );
}
