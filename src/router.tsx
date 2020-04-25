import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useThemeContext } from './theme';
import { customHeaderStyle } from './constants';
import Screens from './screens';
import HomeNavigator from './navigator/HomeNavigator';
import SignupNavigator from './navigator/SignupNavigator';

const RootStack = createStackNavigator();

export default function AppNavigator() {
  const { fonts, colors } = useThemeContext();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SignupScreen"
        screenOptions={{
          headerStyle: customHeaderStyle,
          headerBackTitleStyle: {
            fontFamily: fonts.CORMORANT_REGULAR,
            color: colors.FONT_DARK_COLOR,
            fontSize: fonts.MEDIUM_SIZE,
            textTransform: 'capitalize'
          }
        }}
      >
        <RootStack.Screen
          name="SplashScreen"
          component={Screens.SplashScreen}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name="GetStartedScreen"
          component={Screens.GetStartedScreen}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name="SigninScreen"
          component={Screens.SigninScreen}
        />

        <RootStack.Screen
          name="SignupScreen"
          component={SignupNavigator}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name="ProceedHomeScreen"
          component={Screens.ProceedHomeScreen}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name="HomeScreen"
          component={Screens.ProceedHomeScreen}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name="BookingScreen"
          component={Screens.BookingScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
