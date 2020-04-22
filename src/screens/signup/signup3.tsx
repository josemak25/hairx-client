import React, {useState} from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useThemeContext } from '../../theme';
import { NavigationInterface } from '../types';

import Button from '../../components/button';
import Input from '../../components/input';

import {
  Container,
  NavigationView,
  Pagination,
  Welcome,
  Prompt,
  OfText
} from './styles';

interface SignupScreenThreeProp extends NavigationInterface {
  testID?: string;
}

export default function SignUpScreenThree(props: SignupScreenThreeProp) {
  const { colors, fonts } = useThemeContext();
  const [name, setName] = useState('Claire Tamara');
  const [password, setPassword] = useState('')
  return (
    <Container>
      <SafeAreaView>
      <NavigationView>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={35} color="#707070" />
          </TouchableOpacity>
          <Pagination>
            3<OfText> of </OfText>4
          </Pagination>
        </NavigationView>
        <Welcome style={{ marginTop: '15%' }}>Good to have you</Welcome>
        <Prompt>CREATE ACCOUNT</Prompt>
        <Input
          defaultValue={name}
          onChangeText={input => setName(input)}
          placeholder={name}
          textInputStyle={{
            height: 60,
            fontSize: fonts.LARGE_SIZE,
            marginBottom: '8%'
          }}
        />
      </SafeAreaView>
    </Container>
  );
}
