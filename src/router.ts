import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { customHeaderStyle, navigationBackButton } from './constants';

import Screens from './screens';

const AppNavigator = createStackNavigator(
  {
    // Splash Screen Route
    SplashScreen: { screen: Screens.SplashScreen },

    // Home Screen Route
    HomeScreen: { screen: Screens.HomeScreen }
  },

  {
    initialRouteName: 'HomeScreen',
    headerMode: 'screen',
    defaultNavigationOptions: ({ navigation }) => {
      navigation.state['navigationBackButton'] = navigationBackButton;
      return { headerStyle: customHeaderStyle };
    }
  }
);

export default createAppContainer(AppNavigator);
