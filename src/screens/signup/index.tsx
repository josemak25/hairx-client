import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Button from '../../components/button';
import Input from '../../components/input';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';

import { Container, Welcome, Prompt, Choice, Terms, IconView } from './styles';

interface SignupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SignupScreen(props: SignupScreenProp) {
  const { colors, fonts } = useThemeContext();
  const [email, setEmail] = useState('');
  return (
    <Container>
      <SafeAreaView>
        <Welcome>Welcome</Welcome>
        <Prompt>SIGN UP OR LOG IN</Prompt>
        <Input
          inputLabel="Email address"
          placeholder="tashacombs@ymmail.com"
          defaultValue={email}
          onChangeText={input => setEmail(input)}
          inputLabelStyle={{ fontSize: fonts.LARGE_SIZE + 3 }}
          textInputStyle={{
            height: 60,
            borderColor: colors.FONT_DARK_COLOR,
            borderBottomWidth: 1,
            fontSize: fonts.LARGE_SIZE
          }}
        />
        <Button
          title="Get Started with email"
          buttonStyle={{ marginTop: '6%', height: 60 }}
          onPress={() => props.navigation.navigate('createAccountScreen')}
        />
        <Choice>or</Choice>
        <Button
          title="Continue with facebook"
          buttonStyle={{
            marginBottom: '6%',
            height: 60,
            borderColor: colors.FACEBOOK_COLOR,
            borderWidth: 1,
            backgroundColor: colors.BG_WHITE_COLOR
          }}
          textStyle={{ color: colors.FACEBOOK_COLOR }}
        >
          <IconView>
            <Ionicons name="logo-facebook" size={30} color="#4267B2" />
          </IconView>
        </Button>
      </SafeAreaView>
    </Container>
  );
}
