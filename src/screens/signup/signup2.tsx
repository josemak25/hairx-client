import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';

import SafeAreaView from '../../commons/header/safe-area-view';
import Button from '../../components/button';
import Input from '../../components/input';

import {
  Container,
  Welcome,
  Prompt,
  NavigationView,
  Pagination,
  OfText
} from './styles';

interface SignupScreenTwoProp extends NavigationInterface {
  testID?: string;
}

export default function SignUpScreenTwo(props: SignupScreenTwoProp) {
  const { colors, fonts } = useThemeContext();

  const [email, setEmail] = useState('clairetamara08@gmail.com');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');

  return (
    <SafeAreaView>
      <Container>
        <NavigationView>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={35} color="#707070" />
          </TouchableOpacity>
          <Pagination>
            2<OfText> of </OfText>4
          </Pagination>
        </NavigationView>
        <Welcome style={{ marginTop: '15%' }}>Good to have you</Welcome>
        <Prompt>CREATE ACCOUNT</Prompt>
        <Input
          defaultValue={email}
          onChangeText={input => setEmail(input)}
          placeholder={email}
          textInputStyle={{
            height: 60,
            fontSize: fonts.LARGE_SIZE,
            marginBottom: '8%'
          }}
        />
        <Input
          inputLabel="What's your first name?"
          placeholder="Claire"
          defaultValue={firstName}
          onChangeText={input => setFirst(input)}
          inputLabelStyle={{ fontSize: fonts.LARGE_SIZE + 3 }}
          textInputStyle={{
            height: 60,
            borderColor: colors.FONT_DARK_COLOR,
            borderBottomWidth: 1,
            fontSize: fonts.LARGE_SIZE,
            marginBottom: '3%'
          }}
        />
        <Input
          inputLabel="What's your last name?"
          placeholder="Tamara"
          defaultValue={lastName}
          onChangeText={input => setLast(input)}
          inputLabelStyle={{ fontSize: fonts.LARGE_SIZE + 3 }}
          textInputStyle={{
            height: 60,
            borderColor: colors.FONT_DARK_COLOR,
            borderBottomWidth: 1,
            fontSize: fonts.LARGE_SIZE,
            marginBottom: '8%'
          }}
        />
        <Button
          title="Proceed"
          buttonStyle={{ height: 60 }}
          textStyle={{ fontSize: fonts.LARGE_SIZE }}
          onPress={() => props.navigation.navigate('SignUpScreenThree')}
        />
      </Container>
    </SafeAreaView>
  );
}
