import React, { useState } from 'react';
import CountryPicker, {
  Country,
  CountryCode
} from 'react-native-country-picker-modal';
import { AsYouType } from 'libphonenumber-js';
import ContextDisplay from '../contextDisplay/index';
import { Container, Text, PhoneInputField, CountryDailingCode } from './style';

interface stateType {
  country: string;
  phoneNumber: string;
  visibility: boolean;
  code: CountryCode;
  DailingCode: string;
}

const initialState: stateType = {
  country: 'United States',
  phoneNumber: '',
  visibility: false,
  code: 'US',
  DailingCode: '1'
};

export default function InputCountry() {
  const [context, setContext] = useState<stateType>(initialState);

  const selection = (country: Country) => {
    console.log(country);
    setContext({
      ...context,
      country: country.name as string,
      DailingCode: country.callingCode[0],
      code: country.cca2
    });
  };

  const format = (number: string) => {
    const formatedNumber = new AsYouType(context.code as any).input(number);
    setContext({ ...context, phoneNumber: formatedNumber });
  };

  return (
    <Container>
      <CountryPicker
        visible={context.visibility}
        withCallingCode={true}
        countryCode={context.code}
        withFlag={false}
        onSelect={country => selection(country)}
        renderFlagButton={() => (
          <ContextDisplay
            context={context.country}
            onPress={() => setContext({ ...context, visibility: true })}
          />
        )}
        onClose={() => setContext({ ...context, visibility: false })}
      />
      <Text>What's your number?</Text>

      <PhoneInputField
        onChangeText={number => format(number)}
        placeholder="202-555-0152"
        keyboardType="phone-pad"
        value={context.phoneNumber}
      />
      <CountryDailingCode>+{context.DailingCode}</CountryDailingCode>
    </Container>
  );
}
