import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens/signup';

const SignupStack = createStackNavigator();

export default function SignupNavigator() {
  return (
    <SignupStack.Navigator
      initialRouteName="SocialSignupScreen"
      headerMode="screen"
      screenOptions={{ headerShown: false }}
    >
      <SignupStack.Screen
        name="SocialSignupScreen"
        component={Screens.SocialSignupScreen}
      />
      <SignupStack.Screen
        name="CreateAccountScreen"
        component={Screens.CreateAccountScreen}
      />
      <SignupStack.Screen
        name="CreatePasswordScreen"
        component={Screens.CreatePasswordScreen}
      />
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
