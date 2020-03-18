import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';

const CommunityStack = createStackNavigator();

export default function CommunityNavigator() {
  return (
    <CommunityStack.Navigator
      initialRouteName="CommunityScreen"
      headerMode="screen"
    >
      <CommunityStack.Screen
        name="CommunityScreen"
        component={Screens.CommunityScreen}
      />
      <CommunityStack.Screen
        name="BlogDetailScreen"
        component={Screens.BlogDetailScreen}
      />
      <CommunityStack.Screen
        name="QuestionScreen"
        component={Screens.QuestionScreen}
      />
    </CommunityStack.Navigator>
  );
}
