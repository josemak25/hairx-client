import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';

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
  const [values, setValues] =  useState({
      firstName: '',
      lastName: ''
  })

  return (
    <Container>
      <SafeAreaView>
        <NavigationView>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={35} color="#707070" />
          </TouchableOpacity>
          <Pagination>
            2<OfText> of </OfText>4
          </Pagination>
        </NavigationView>
        <Welcome>Good to have you</Welcome>
        <Prompt>CREATE ACCOUNT</Prompt>
        <Input
          defaultValue={email}
          onChangeText={input => setEmail(input)}
          placeholder={email}
          textInputStyle={{
            height: 60,
            fontSize: fonts.LARGE_SIZE,
            marginBottom: '10%'
          }}
        />
      </SafeAreaView>
    </Container>
  );
}
