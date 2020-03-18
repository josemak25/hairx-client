import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen" headerMode="screen">
      <HomeStack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      <HomeStack.Screen
        name="BlogDetailScreen"
        component={Screens.BlogDetailScreen}
      />
    </HomeStack.Navigator>
  );
}
