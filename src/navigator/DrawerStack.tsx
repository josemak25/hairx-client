import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, TouchableOpacity } from 'react-native';

import BackButtonIcon from '../../assets/icons/back-button';
import { useThemeContext } from '../theme';
import { NavigationInterface } from '../screens/types';

const Stack = createStackNavigator();

interface DrawerStackProps extends NavigationInterface {
  stackName: string;
  component: any;
  stackTitle: string;
}

export default function DrawerStack(props: DrawerStackProps) {
  const { navigation, stackName, stackTitle, component } = props;

  const { fonts } = useThemeContext();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={stackName}
        component={component}
        options={{
          title: stackTitle,
          headerLeft: () => (
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                marginLeft: 20
              }}
              onPress={() => navigation.goBack()}
            >
              <BackButtonIcon
                width={`${Platform.OS === 'ios' ? '40%' : '30%'}`}
                height={`${Platform.OS === 'ios' ? '40%' : '30%'}`}
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
