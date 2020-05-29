import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { useThemeContext } from '../../../../theme';
import { NavigationInterface } from '../../../types';
import Button from '../../../../components/button';
import InputCountry from '../countryInput/country';
import SafeAreaView from '../../../../commons/safe-area-view';
import Header from '../../../../commons/header';
import { BackButton } from '../../styles';

import {
  Container,
  HeaderTitleContainer,
  HeaderTitleOf,
  HeaderTitleNumber,
  Subtitle,
  Title,
  ButtonStyle
} from './style';

interface PhoneVerificationProps extends NavigationInterface {
  testID?: string;
}

export default function PhoneVerification(props: PhoneVerificationProps) {
  const { navigation } = props;
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
            <HeaderTitleNumber>4</HeaderTitleNumber>
            <HeaderTitleOf>of</HeaderTitleOf>
            <HeaderTitleNumber>4</HeaderTitleNumber>
          </HeaderTitleContainer>
        )}
        headerLeft={() => (
          <BackButton onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color={colors.INACTIVE_FIELD_COLOR}
            />
          </BackButton>
        )}
      ></Header>
      <Container showsVerticalScrollIndicator={false}>
        <Title>VERIFY YOUR IDENTITY</Title>
        <Subtitle>
          Provide your phone number to receive an OTP via text message
        </Subtitle>
        <InputCountry />
        <Button
          buttonStyle={ButtonStyle.mainButton}
          textStyle={ButtonStyle.textStyle}
          title="Text me OTP"
          onPress={() => navigation.navigate('OTPVerificationScreen')}
        />
      </Container>
    </SafeAreaView>
  );
}
