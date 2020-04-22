import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';

const SignupStack = createStackNavigator();

export default function SignupNavigator() {
  return (
    <SignupStack.Navigator
      initialRouteName="RegimenScreen"
      headerMode="screen"
      mode="modal"
      screenOptions={{ headerShown: false }}
    >
      <SignupStack.Screen
        name="RegimenScreen"
        component={Screens.SignupScreen}
      />

      <SignupStack.Screen
        name="RegimenSetupScreen"
        component={Screens.RegimenSetupScreen}
      />
    </SignupStack.Navigator>
  );
}
