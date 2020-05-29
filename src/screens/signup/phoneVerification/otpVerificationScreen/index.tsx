import React from 'react';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationInterface } from '../../../types';
import { useThemeContext } from '../../../../theme';
import Button from '../../../../components/button';
import ContextDisplay from '../contextDisplay';
import OTPField from './otpField';
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
  Time,
  ButtonStyle
} from './style';

interface OTPVerificationProps extends NavigationInterface {
  testID?: string;
}

export default function OTPVerification(props: OTPVerificationProps) {
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
          We have sent a text message with your OTP to your phone, provide it
          here
        </Subtitle>
        <ContextDisplay
          context="+1 234 555-6754"
          onPress={() => navigation.goBack()}
        />
        <OTPField />
        <Time>Resend in 19secs</Time>
        <Button
          buttonStyle={ButtonStyle.mainButton}
          textStyle={ButtonStyle.textStyle}
          title="Verify"
          onPress={() => navigation.replace('ProceedHomeScreen')}
        />
      </Container>
    </SafeAreaView>
  );
}
