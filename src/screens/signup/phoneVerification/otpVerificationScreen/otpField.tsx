import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useThemeContext } from '../../../../theme';
import applyScale from '../../../../utils/applyScale';

export default function OTPField() {
  const { colors, fonts } = useThemeContext();
  return (
    <OTPInputView
      pinCount={5}
      style={{
        width: '80%',
        height: applyScale(60),
        marginBottom: 27,
        borderRadius: 5,
        backgroundColor: colors.INPUT_FIELD_COLOR,
        alignSelf: 'center'
      }}
      codeInputFieldStyle={{
        height: applyScale(60),
        fontFamily: fonts.JOST_BOOK,
        fontSize: fonts.LARGE_SIZE + 5,
        color: colors.FONT_DARK_COLOR,
        textAlign: 'center',
        margin: 1,
        borderWidth: 0,
        borderBottomWidth: 2
      }}
    />
  );
}
