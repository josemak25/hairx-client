import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { NavigationInterface } from '../../../types';
import Button from '../../../../components/button';
import ContextDisplay from '../contextDisplay';
import OTPField from './otpField';
import SafeAreaView from '../../../../commons/header/safe-area-view';
import Header from '../../../../commons/header/header';
import {
  Container,
  HeaderTitleContainer,
  HeaderTitleOf,
  HeaderTitleNumber,
  CancelSetupButton,
  Subtitle,
  Title,
  Time,
  ButtonStyle
} from './style';

interface OTPVerificationProps extends NavigationInterface {
  testID?: string;
}

export default function OTPVerification(props: OTPVerificationProps) {
  return (
    <SafeAreaView>
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitleNumber>4</HeaderTitleNumber>
            <HeaderTitleOf>of</HeaderTitleOf>
            <HeaderTitleNumber>4</HeaderTitleNumber>
          </HeaderTitleContainer>
        )}
        headerLeft={() => (
          <CancelSetupButton onPress={() => props.navigation.goBack()}>
            <AntDesign name="left" size={18} />
          </CancelSetupButton>
        )}
      ></Header>
      <Container>
        <Title>VERIFY YOUR IDENTITY</Title>
        <Subtitle>
          We have sent a text message with your OTP to your phone, provide it
          here
        </Subtitle>
        <ContextDisplay
          context="+1 234 555-6754"
          onPress={props.navigation.goBack}
        />
        <OTPField />
        <Time>Resend in 19secs</Time>
        <Button
          buttonStyle={ButtonStyle.mainButton}
          textStyle={ButtonStyle.textStyle}
          title="Verify"
        />
      </Container>
    </SafeAreaView>
  );
}
