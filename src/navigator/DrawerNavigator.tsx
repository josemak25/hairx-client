import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';

import Screens from '../screens';
import DrawerStack from './DrawerStack';
import CustomDrawer from './CustomDrawer';

import { useThemeContext } from '../theme';
import { Dimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { colors } = useThemeContext();

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={props => <CustomDrawer {...props} />}
      drawerStyle={{
        width: Dimensions.get('window').width - 50,
        backgroundColor: colors.DRAWER_COLOR
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={BottomNavigator}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="TrackOrdersScreen"
        options={{ title: 'Track Orders' }}
        children={props => (
          <DrawerStack
            stackName="TrackOrdersScreen"
            stackTitle="Track Orders"
            component={Screens.TrackOrdersScreen}
            {...props}
          />
        )}
      />
      <Drawer.Screen
        name="PrivacyAndPolicyScreen"
        options={{ title: 'Privacy & Policy' }}
        children={props => (
          <DrawerStack
            stackName="PrivacyAndPolicyScreen"
            stackTitle="Privacy & Policy"
            component={Screens.PrivacyAndPolicyScreen}
            {...props}
          />
        )}
      />
      <Drawer.Screen
        name="AboutUsScreen"
        options={{ title: 'About Us' }}
        children={props => (
          <DrawerStack
            stackName="AboutUsScreen"
            stackTitle="About Us"
            component={Screens.AboutUsScreen}
            {...props}
          />
        )}
      />
    </Drawer.Navigator>
  );
}
