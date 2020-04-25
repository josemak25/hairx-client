import React from 'react';
import { WebView } from 'react-native-webview';
import { NavigationInterface } from '../types';
import Header from '../../commons/header';
import SafeAreaView from '../../commons/safe-area-view';
import { StatusBar } from 'react-native';
import { useThemeContext } from '../../theme';

import { HeaderTitleContainer, HeaderTitle } from './styles';

interface BookingScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Booking(props: BookingScreenProp) {
  const { colors } = useThemeContext();

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.BG_WHITE_COLOR}
      />
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>hairx</HeaderTitle>
          </HeaderTitleContainer>
        )}
      />
      <WebView
        source={{
          uri:
            'https://app.acuityscheduling.com/schedule.php?owner=16573926&notembedded=1'
        }}
        style={{ flex: 1 }}
        cacheEnabled
        javaScriptEnabled
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
