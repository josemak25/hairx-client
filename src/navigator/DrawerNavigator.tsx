import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';

import {
  TrackOrdersStack,
  PrivacyAndPolicyStack,
  AboutUsStack
} from './DrawerStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen
        name="HomeScreen"
        component={BottomNavigator}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="TrackOrdersScreen"
        component={TrackOrdersStack}
        options={{ title: 'Track Orders' }}
      />
      <Drawer.Screen
        name="PrivacyAndPolicyScreen"
        component={PrivacyAndPolicyStack}
        options={{ title: 'Privacy & Policy' }}
      />
      <Drawer.Screen
        name="AboutUsScreen"
        component={AboutUsStack}
        options={{ title: 'About Us' }}
      />
    </Drawer.Navigator>
  );
}
