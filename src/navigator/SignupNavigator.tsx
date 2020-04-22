import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';

const SignupStack = createStackNavigator();

export default function SignupNavigator() {
  return (
    <SignupStack.Navigator initialRouteName="SignupScreen" headerMode="screen">
      <SignupStack.Screen
        name="SignupScreen"
        component={Screens.SignupScreen}
      />
      <SignupStack.Screen
        name="SignupScree1"
        component={Screens.SignupScreen}
      />
      <SignupStack.Screen
        name="SignupScree2"
        component={Screens.SignupScreen}
      />
      <SignupStack.Screen
        name="SignupScree3"
        component={Screens.SignupScreen}
      />

      <SignupStack.Screen
        name="RegimenSetupScreen"
        component={Screens.RegimenSetupScreen}
      />
    </SignupStack.Navigator>
  );
}
