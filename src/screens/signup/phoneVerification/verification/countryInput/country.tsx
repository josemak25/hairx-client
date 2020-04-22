import React, { useRef, useState, useEffect } from 'react';
import CountryPicker, {
  Country,
  CountryCode
} from 'react-native-country-picker-modal';
import { AsYouType } from 'libphonenumber-js';

import CountryDisplay from '../display/index';
import { Container, Text, PhoneInputField, CountryDailingCode } from '../style';
export default function InputCountry() {
  const [country, setCountry] = useState<string>('United States');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [visibility, setvisibility] = useState<boolean>(false);
  const [code, setCode] = useState<CountryCode>('US');
  const [DailingCode, setDailingCode] = useState<string>('1');

  const selection = (country: Country) => {
    setCountry(country.name as string);
    setDailingCode(country.callingCode[0]);
    setCode(country.cca2);
  };

  const format = (number: string) => {
    const formatedNumber = new AsYouType(code as any).input(number);
    setPhoneNumber(formatedNumber);
  };
  return (
    <Container>
      <CountryPicker
        visible={visibility}
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

      <PhoneInputField
        onChangeText={number => format(number)}
        placeholder="202-555-0152"
        value={phoneNumber}
      />
      <CountryDailingCode>+{DailingCode}</CountryDailingCode>
    </Container>
  );
}
