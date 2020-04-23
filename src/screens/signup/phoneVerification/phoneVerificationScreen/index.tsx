import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { NavigationInterface } from '../../../types';
import Button from '../../../../components/button';
import InputCountry from '../countryInput/country';
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
  ButtonStyle
} from './style';

interface PhoneVerificationProps extends NavigationInterface {
  testID?: string;
}

export default function PhoneVerification(props: PhoneVerificationProps) {
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
          Provide your phone number to receive an OTP via text message
        </Subtitle>
        <InputCountry />
        <Button
          buttonStyle={ButtonStyle.mainButton}
          textStyle={ButtonStyle.textStyle}
          title="Text me OTP"
          onPress={() => props.navigation.navigate('OTPVerificationScreen')}
        />
      </Container>
    </SafeAreaView>
  );
}