import React, { useRef, useState, useEffect } from 'react';
import CountryPicker, {
  Country,
  CountryCode
} from 'react-native-country-picker-modal';
import ReactNativePhoneInput from 'react-native-phone-input';
import { TextInput } from 'react-native';
import PhoneInput from 'react-native-phone-input';

import CountryDisplay from '../display/index';
import { Container, Text } from '../style';
import { useThemeContext } from '../../../../../theme';
export default function InputCountry() {
  const { colors, fonts } = useThemeContext();
  const [country, setCountry] = useState<string>('United States');
  const [phoneNumber, setPhoneNumber] = useState<string>('+1');
  const [vis, setvisibility] = useState<boolean>(false);
  const [code, setCode] = useState<CountryCode>('US');
  const phoneRef = useRef<ReactNativePhoneInput<typeof TextInput>>(null);

  const selection = (country: Country) => {
    setCountry(country.name as string);
    console.log(country);
    setPhoneNumber('+' + country.callingCode[0]);
    setCode(country.cca2);
    phoneRef.current.selectCountry(country.cca2.toLocaleLowerCase());
  };
  return (
    <Container>
      <CountryPicker
        visible={vis}
        withCallingCode={true}
        countryCode={code}
        withFlag={false}
        onSelect={country => selection(country)}
        renderFlagButton={() => (
          <CountryDisplay
            context="country"
            country={country}
            setVisibility={setvisibility}
          />
        )}
        onClose={() => setvisibility(false)}
      />
      <Text>What's your number?</Text>

      <PhoneInput
        ref={phoneRef}
        value={phoneNumber}
        style={{
          width: '100%',
          backgroundColor: colors.INPUT_FIELD_COLOR,
          height: 45,
          borderRadius: 5,
          marginTop: 10,
          marginBottom: 40
        }}
        textStyle={{
          fontFamily: fonts.JOST_BOOK as string,
          opacity: true ? 0.3 : 0.7
        }}
        onChangePhoneNumber={val => setPhoneNumber(phoneNumber + val)}
        flagStyle={{ width: 0, height: 0 }}
        initialCountry={code.toLocaleLowerCase()}
        textProps={{
          placeholder: '202-555-0152'
        }}
        allowZeroAfterCountryCode={false}
      />
    </Container>
  );
}
