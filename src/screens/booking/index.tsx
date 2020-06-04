import React from 'react';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

import { NavigationInterface } from '../types';
import Header from '../../commons/header';
import SafeAreaView from '../../commons/safe-area-view';
import { StatusBar } from 'react-native';
import { useThemeContext } from '../../theme';

import { HeaderTitleContainer, HeaderTitle, BackButton } from './styles';

interface BookingScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Booking(props: BookingScreenProp) {
  const { colors } = useThemeContext();

  const data = {
    ownerId: '16573926',
    firstName: 'Izuchukwu',
    lastName: 'Ogbodo',
    phone: '07032150416',
    email: 'solomonogbodo@yahoo.com'
  };

  const handleBackPress = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.BG_WHITE_COLOR}
      />
      <Header
        headerLeft={() => (
          <BackButton onPress={handleBackPress}>
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color={colors.INACTIVE_FIELD_COLOR}
            />
          </BackButton>
        )}
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>hairx</HeaderTitle>
          </HeaderTitleContainer>
        )}
      />
      <WebView
        source={{
          uri: `https://app.acuityscheduling.com/schedule.php?owner=${data.ownerId}&notembedded=1&firstName=${data.firstName}&lastName=${data.lastName}&phone=${data.phone}&email=${data.email}`
        }}
        style={{ flex: 1 }}
        cacheEnabled
        javaScriptEnabled
        showsVerticalScrollIndicator={false}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
}
