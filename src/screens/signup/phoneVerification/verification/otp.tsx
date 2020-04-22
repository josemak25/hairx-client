import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import { Container, Info, Text } from './style';
import CountryDisplay from './countryDisplay';
import { useThemeContext } from '../../../../theme';
export default function InputOTP() {
  const { colors, fonts } = useThemeContext();
  return (
    <Container>
      <CountryDisplay context="otp" country="+1 234-568-0989" />
      <OTPInputView
        pinCount={5}
        style={{
          width: 238,
          height: 45,
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
      {/* phone number place holder */}
      {/* input phone number library*/}
    </Container>
  );
}
