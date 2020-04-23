import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useThemeContext } from '../../../../theme';

export default function OTPField() {
  const { colors, fonts } = useThemeContext();
  return (
    <OTPInputView
      pinCount={5}
      style={{
        width: 240,
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
        margin: 1,
        color: colors.FONT_DARK_COLOR,
        textAlign: 'center',
        fontFamily: fonts.JOST_BOOK,
        fontSize: 20
      }}
    />
  );
}