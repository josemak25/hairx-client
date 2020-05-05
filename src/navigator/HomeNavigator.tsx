import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';
import BottomNavigator from './BottomNavigator';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="RegimenScreen"
      headerMode="screen"
      mode="modal"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="RegimenScreen" component={BottomNavigator} />

      <HomeStack.Screen
        name="RegimenSetupScreen"
        component={Screens.RegimenSetupScreen}
      />

      <HomeStack.Screen
        name="HairCareDetailScreen"
        component={Screens.HairCareDetailScreen}
      />

      <HomeStack.Screen
        name="FoodDetailScreen"
        component={Screens.FoodDetailScreen}
      />

      <HomeStack.Screen
        name="RoutineDetailScreen"
        component={Screens.FoodDetailScreen}
      />

      <HomeStack.Screen
        name="BookingScreen"
        component={Screens.BookingScreen}
      />
    </HomeStack.Navigator>
  );
}
