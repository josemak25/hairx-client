import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens/signup/index';

const SignupStack = createStackNavigator();

export default function SignupNavigator() {
  return (
    <SignupStack.Navigator
      initialRouteName="PhoneVerificationScreen"
      headerMode="screen"
      screenOptions={{
        headerShown: false
      }}
    >
      <SignupStack.Screen
        name="PhoneVerificationScreen"
        component={Screens.PhoneVerificationScreen}
      />
      <SignupStack.Screen
        name="OTPVerificationScreen"
        component={Screens.OTPVerificationScreen}
      />
    </SignupStack.Navigator>
  );
}
