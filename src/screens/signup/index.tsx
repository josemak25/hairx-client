import React from 'react';
import {SafeAreaView} from 'react-native';

import Button from '../../components/button';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';

import { Container, Welcome, Prompt, Choice, Terms } from './styles';

interface SignupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SignupScreen(props: SignupScreenProp) {
  const { colors } = useThemeContext();
  return (
    <Container>
      <SafeAreaView>
      <Welcome>Welcome</Welcome>
      <Prompt>SIGN UP OR LOG IN</Prompt>
      </SafeAreaView>
    </Container>
  );
}
