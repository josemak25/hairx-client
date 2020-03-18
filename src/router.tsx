import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useThemeContext } from './theme';
import { customHeaderStyle } from './constants';
import Screens from './screens';
import BottomNavigator from './navigator/BottomNavigator';

const RootStack = createStackNavigator();

export default function AppNavigator() {
  const { fonts, colors } = useThemeContext();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerStyle: customHeaderStyle,
          headerBackTitleStyle: {
            fontFamily: fonts.MONTSERRAT_SEMI_BOLD,
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
          name="SigninScreen"
          component={Screens.SigninScreen}
        />
        <RootStack.Screen
          name="SignupScreen"
          component={Screens.SignupScreen}
        />
        <RootStack.Screen
          name="GetStartedScreen"
          component={Screens.GetStartedScreen}
        />
        <RootStack.Screen
          name="ProfileSetupScreen"
          component={Screens.ProfileSetupScreen}
        />
        <RootStack.Screen
          name="HomeScreen"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
