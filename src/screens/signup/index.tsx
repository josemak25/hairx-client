import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import Button from '../../components/button';
import Input from '../../components/input';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';

import { Container, Welcome, Prompt, Choice, Terms } from './styles';

interface SignupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SignupScreen(props: SignupScreenProp) {
  const { colors } = useThemeContext();
  const [email, setEmail] = useState("")
  return (
    <Container>
      <SafeAreaView>
      <Welcome>Welcome</Welcome>
      <Prompt>SIGN UP OR LOG IN</Prompt>
      <Input inputLabel="Email address" placeholder="tashacombs@ymmail.com" defaultValue={email} onChangeText={input => setEmail(input)} />
      </SafeAreaView>
    </Container>
  );
}
