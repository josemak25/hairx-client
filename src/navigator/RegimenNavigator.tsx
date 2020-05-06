import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens/regimen';

const RegimenStack = createStackNavigator();

export default function RegimenNavigator() {
  const [show, setShow] = useState(true);

  return (
    <RegimenStack.Navigator
      initialRouteName={show ? 'RecommendationScreen' : 'GoalSetUpScreen'}
      headerMode="screen"
      screenOptions={{ headerShown: false }}
    >
      <RegimenStack.Screen
        name="GoalSetUpScreen"
        component={Screens.GoalSetUpScreen}
      />

      <RegimenStack.Screen
        name="ResumeRegimenSetup"
        component={Screens.ResumeRegimenSetup}
      />

      <RegimenStack.Screen
        name="RecommendationScreen"
        component={Screens.RecommendationScreen}
      />
    </RegimenStack.Navigator>
  );
}
