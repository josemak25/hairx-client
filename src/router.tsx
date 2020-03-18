import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, TouchableOpacity } from 'react-native';
import { useThemeContext } from './theme';
import { useStoreContext } from './store';
import DrawerNavigator from './navigator/DrawerNavigator';
import BackButtonIcon from '../assets/icons/back-button';
import { customHeaderStyle } from './constants';
import applyScale from './utils/applyScale';
import Screens from './screens';

import CartIcon from '../assets/icons/cart-icon';
import boxShadow from './utils/boxShadows';

import { CartContainer, CartNotification } from './navigator/styles';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={{ headerStyle: customHeaderStyle }}>
      <MainStack.Screen
        name="SplashScreen"
        component={Screens.SplashScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="HomeScreen"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}

export default function AppNavigator() {
  const { fonts, colors } = useThemeContext();

  const {
    state: { cartState }
  } = useStoreContext();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SplashScreen"
        mode="modal"
        screenOptions={{
          headerStyle: customHeaderStyle,
          headerTitleStyle: {
            fontFamily: fonts.NOTOSANS_BOLD,
            fontSize: Platform.select({
              ios: fonts.MEDIUM_SIZE - 2,
              android: fonts.MEDIUM_SIZE - 2
            })
          }
        }}
      >
        <RootStack.Screen
          name="SplashScreen"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="CartScreen"
          component={Screens.CartScreen}
          options={{
            title: 'Cart.',
            headerBackTitleVisible: false,
            headerLeft: props => {
              return (
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    marginLeft: 10
                  }}
                  {...props}
                >
                  <BackButtonIcon
                    width={`${Platform.OS === 'ios' ? '40%' : '30%'}`}
                    height={`${Platform.OS === 'ios' ? '40%' : '30%'}`}
                  />
                </TouchableOpacity>
              );
            },
            headerLeftContainerStyle: { width: 70, marginLeft: 10 },
            headerRight: () => {
              return (
                <CartContainer
                  style={[
                    {
                      width: applyScale(42),
                      height: applyScale(42),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 42 / 2,
                      marginRight: 20,
                      backgroundColor: colors.BG_LIGHT_COLOR
                    },
                    boxShadow({
                      elevation: 4,
                      width: 0,
                      height: 3,
                      shadowColor: colors.FONT_DARK_COLOR,
                      shadowOpacity: 0.06,
                      shadowRadius: 2
                    })
                  ]}
                >
                  {cartState.cart.length ? (
                    <CartNotification
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        left: 32
                      }}
                    />
                  ) : null}
                  <CartIcon
                    width="60%"
                    height="60%"
                    fillColor={colors.ACTIVE_TAB_ICON_COLOR}
                  />
                </CartContainer>
              );
            },
            headerRightContainerStyle: { width: 70 }
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
