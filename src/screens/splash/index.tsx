import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../../store';
import CARD_ITEM from '../../utils/getItemCardSize';
import ScreenGridSizeActions from '../../store/grid/actions';
import { NavigationInterface } from '../types';

import { Container, Logo } from './styles';
import SafeAreaView from '../../commons/header/safe-area-view';
import { StatusBar } from 'react-native';
import { useThemeContext } from '../../theme';
interface SplashScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SplashScreen({ navigation }: SplashScreenProp) {
  const { colors } = useThemeContext();
  const { state, dispatch } = useStoreContext();

  const [splash, setSplash] = useState({ mobileGridSize: state.grid });

  useEffect(() => {
    handleAppLayout();
    setTimeout(() => setSplash({ ...splash }), 500);
    setTimeout(checkInitialLaunch, 1000);
  }, []);

  // set default card sizes for app when app is launched
  const handleAppLayout = () => ScreenGridSizeActions(dispatch, CARD_ITEM);

  const checkInitialLaunch = async () => {
    // do checks here for initial launch and subsequent launch
    navigation.replace('HomeScreen');
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.BG_WHITE_COLOR}
      />
      <Container>
        <Logo source={require('../../../assets/images/logo.png')} />
      </Container>
    </SafeAreaView>
  );
}
