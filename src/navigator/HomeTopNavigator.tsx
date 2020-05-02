import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';

const HomeStack = createStackNavigator();

export default function HomeTopNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="FoodScreen"
      headerMode="screen"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="RoutineScreen" component={null} />
      <HomeStack.Screen name="FoodScreen" component={Screens.FoodScreen} />
      <HomeStack.Screen name="SaloonVisits" component={null} />
    </HomeStack.Navigator>
  );
}
