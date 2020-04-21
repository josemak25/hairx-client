import React, { useRef, useState } from 'react';
import CountryPicker, {
  Country,
  CountryCode
} from 'react-native-country-picker-modal';

import { Container, Text } from './style';
import { Button } from 'react-native';
import { TextInput, View } from 'react-native';
import CountryDisplay from './countryDisplay';
export default function InputCountry() {
  const [country, setCountry] = useState<string>('');
  const [vis, setvisibility] = useState<boolean>(false);
  const [code, setCode] = useState<CountryCode>('US');

  const selection = (country: Country) => {
    setCountry(country.name as string);
    setCode(country.cca2);
  };
  return (
    <Container>
      <CountryPicker
        visible={vis}
        withCallingCode={true}
        countryCode={code}
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
    </Container>
  );
}
