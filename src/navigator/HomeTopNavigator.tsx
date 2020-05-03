import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';

const HomeStack = createStackNavigator();

export default function HomeTopNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="RoutineScreen"
      headerMode="screen"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen
        name="RoutineScreen"
        component={Screens.RegimenScreen}
      />
      <HomeStack.Screen
        name="RecommendationScreen"
        component={Screens.RecommendationScreen}
      />
      <HomeStack.Screen
        name="FoodDetailsScreen"
        component={Screens.FoodDetailsScreen}
      />
      {/* <HomeStack.Screen name="SaloonVisits" component={null} /> */}
    </HomeStack.Navigator>
  );
}
