import React, { useState } from 'react';
import CountryPicker, {
  Country,
  CountryCode
} from 'react-native-country-picker-modal';
import { AsYouType } from 'libphonenumber-js';
import ContextDisplay from '../contextDisplay/index';
import { Container, Text, PhoneInputField, CountryDailingCode } from './style';
import { KeyboardAvoidingView } from 'react-native';

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

  const selection = async (country: Country) => {
    const countryDetails = await country;
    setContext({
      ...context,
      country: countryDetails.name as string,
      DailingCode: countryDetails.callingCode[0],
      code: await countryDetails.cca2,
      visibility: false
    });
  };

  const format = (number: string) => {
    const formatedNumber = new AsYouType(context.code as any).input(number);
    setContext({ ...context, phoneNumber: formatedNumber });
    console.log(context.phoneNumber);
  };

  return (
    <Container>
      <CountryPicker
        visible={context.visibility}
        withCallingCode={true}
        countryCode={context.code}
        withFlag={false}
        onSelect={country => selection(country)}
        onClose={() => setContext({ ...context, visibility: false })}
        renderFlagButton={() => (
          <ContextDisplay
            context={context.country}
            onPress={() => setContext({ ...context, visibility: true })}
          />
        )}
      />
      <Text>What's your number?</Text>
      <CountryDailingCode>
        <Text>+{context.DailingCode}</Text>
        <PhoneInputField
          onChangeText={number => format(number)}
          placeholder="202-555-0152"
          keyboardType="phone-pad"
          value={context.phoneNumber}
        />
      </CountryDailingCode>
    </Container>
  );
}
