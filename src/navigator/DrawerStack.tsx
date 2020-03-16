import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, TouchableOpacity } from 'react-native';

import Screens from '../screens';
import BackButtonIcon from '../../assets/icons/back-button';
import { useThemeContext } from '../theme';
import { NavigationInterface } from '../screens/types';

const Stack = createStackNavigator();

export function TrackOrdersStack({ navigation }: NavigationInterface) {
  const { fonts } = useThemeContext();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackOrdersScreen"
        component={Screens.TrackOrdersScreen}
        options={{
          title: 'Track orders',
          headerLeft: () => (
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                paddingLeft: 10
              }}
              onPress={() => navigation.goBack()}
            >
              <BackButtonIcon
                width={`${Platform.OS === 'ios' ? '45%' : '30%'}`}
                height={`${Platform.OS === 'ios' ? '45%' : '30%'}`}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { width: 70 },

          headerTitleStyle: {
            fontFamily: fonts.NOTOSANS_BOLD,
            fontSize: Platform.select({
              ios: fonts.MEDIUM_SIZE - 2,
              android: fonts.MEDIUM_SIZE - 2
            })
          }
        }}
      />
    </Stack.Navigator>
  );
}

export function AboutUsStack({ navigation }: NavigationInterface) {
  const { fonts } = useThemeContext();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AboutUsScreen"
        component={Screens.AboutUsScreen}
        options={{
          title: 'About Us',
          headerLeft: () => (
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                paddingLeft: 10
              }}
              onPress={() => navigation.goBack()}
            >
              <BackButtonIcon
                width={`${Platform.OS === 'ios' ? '45%' : '30%'}`}
                height={`${Platform.OS === 'ios' ? '45%' : '30%'}`}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { width: 70 },

          headerTitleStyle: {
            fontFamily: fonts.NOTOSANS_BOLD,
            fontSize: Platform.select({
              ios: fonts.MEDIUM_SIZE - 2,
              android: fonts.MEDIUM_SIZE - 2
            })
          }
        }}
      />
    </Stack.Navigator>
  );
}

export function PrivacyAndPolicyStack({ navigation }: NavigationInterface) {
  const { fonts } = useThemeContext();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PrivacyAndPolicyScreen"
        component={Screens.PrivacyAndPolicyScreen}
        options={{
          title: 'Privacy & Policy',
          headerLeft: () => (
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                paddingLeft: 10
              }}
              onPress={() => navigation.goBack()}
            >
              <BackButtonIcon
                width={`${Platform.OS === 'ios' ? '45%' : '30%'}`}
                height={`${Platform.OS === 'ios' ? '45%' : '30%'}`}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { width: 70 },

          headerTitleStyle: {
            fontFamily: fonts.NOTOSANS_BOLD,
            fontSize: Platform.select({
              ios: fonts.MEDIUM_SIZE - 2,
              android: fonts.MEDIUM_SIZE - 2
            })
          }
        }}
      />
    </Stack.Navigator>
  );
}
