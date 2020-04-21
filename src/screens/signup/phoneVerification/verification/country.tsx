import React, { useRef, useState } from 'react';
import CountryPicker, {
  Country,
  CountryCode
} from 'react-native-country-picker-modal';

import { Container, Text } from './style';
import { Button } from 'react-native';
import { TextInput, View } from 'react-native';
export default function InputCountry() {
  const [country, setCountry] = useState<string>('');
  const [vis, setvis] = useState<boolean>(false);
  const [code, setCode] = useState<CountryCode>('US');

  const selection = (country: Country) => {
    setCountry(country.name as string);
    setCode(country.cca2);
  };
  return (
    <Container>
      {/* country select here library*/}
      <Text>What's your number?</Text>
      <Button title="change" onPress={() => setvis(true)} />
      <CountryPicker
        visible={vis}
        withCallingCode={true}
        countryCode={code}
        onSelect={country => selection(country)}
        renderFlagButton={() => (
          <TextInput value={country} onChangeText={() => false} />
        )}
        onClose={() => setvis(false)}
      />
      {/* input phone number library*/}
    </Container>
  );
}

function Liew() {
  return <View></View>;
}
