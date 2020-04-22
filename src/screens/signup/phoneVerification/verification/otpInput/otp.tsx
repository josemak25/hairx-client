import React, { useState } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import { Container, Time } from '../style';
import CountryDisplay from '../display';
import { useThemeContext } from '../../../../../theme';

interface Iprops {
  goBack: () => void;
}

export default function InputOTP(props: Iprops) {
  const [countDown, setCountdown] = useState<number>(19);
  const { colors, fonts } = useThemeContext();
  return (
    <Container>
      <CountryDisplay
        context="otp"
        country="+1 234-568-0989"
        goBack={props.goBack}
      />
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
      <Time>Resend in {countDown}secs</Time>
    </Container>
  );
}
