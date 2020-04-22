import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { AntDesign } from '@expo/vector-icons';

import SafeAreaView from '../../../commons/header/safe-area-view';
import Header from '../../../commons/header/header';
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
import { NavigationInterface } from '../../types';
import Button from '../../../components/button';
import { useThemeContext } from '../../../theme';
import CountryDisplay from '../phoneVerification/verification/display';

interface OTPVerificationProps extends NavigationInterface {
  testID?: string;
}

export default function OTPVerification(props: OTPVerificationProps) {
  const { colors, fonts } = useThemeContext();
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
        <CountryDisplay />
        <OTPInputView
          pinCount={5}
          style={{
            width: 238,
            height: 45,
            marginBottom: 27,
            borderRadius: 5,
            backgroundColor: colors.INPUT_FIELD_COLOR,
            alignSelf: 'center'
          }}
          codeInputFieldStyle={{
            borderWidth: 0,
            height: 42,
            borderBottomWidth: 4,
            margin: 2,
            color: colors.FONT_DARK_COLOR,
            textAlign: 'center',
            fontFamily: fonts.JOST_BOOK,
            fontSize: 20
          }}
        />
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
