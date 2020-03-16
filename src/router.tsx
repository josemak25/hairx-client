import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './navigator/DrawerNavigator';

import { customHeaderStyle } from './constants';

import Screens from './screens';

const Stack = createStackNavigator();

const defaultNavigationOptions = () => ({ headerStyle: customHeaderStyle });

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={defaultNavigationOptions}
      >
        <Stack.Screen
          name="HomeScreen"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SplashScreen" component={Screens.SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
