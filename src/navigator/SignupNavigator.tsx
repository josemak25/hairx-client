import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens/signup/index';

const SignupStack = createStackNavigator();

export default function SignupNavigator() {
  return (
    <SignupStack.Navigator initialRouteName="SignupScreen" headerMode="screen">
      {/* <SignupStack.Screen
        name="SignupScree3"
        component={Screens.SignupScreen}
      /> */}

      <SignupStack.Screen
        name="OTPScreen"
        component={Screens.OTPVerification}
        options={{
          headerShown: false
        }}
      />
    </SignupStack.Navigator>
  );
}
