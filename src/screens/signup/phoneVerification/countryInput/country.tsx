import React, { useState } from 'react';
import CountryPicker, {
  Country,
  CountryCode
} from 'react-native-country-picker-modal';
import { AsYouType } from 'libphonenumber-js';
import { useThemeContext } from '../../../../theme';
import ContextDisplay from '../contextDisplay';
import Input from '../../../../commons/input';

import { Container, DailingCode, PhoneNumberContainer } from './style';

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
  const { fonts } = useThemeContext();

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

      <PhoneNumberContainer>
        <DailingCode>+{context.DailingCode}</DailingCode>
        <Input
          inputLabel="What's your number?"
          placeholder="202-555-0152"
          keyboardType="phone-pad"
          defaultValue={context.phoneNumber}
          onChangeText={number => format(number)}
          returnKeyType="done"
          textInputStyle={{
            height: 60,
            fontSize: fonts.LARGE_SIZE + 3,
            paddingLeft: context.DailingCode.length >= 3 ? 75 : 50
          }}
        />
      </PhoneNumberContainer>
    </Container>
  );
}
