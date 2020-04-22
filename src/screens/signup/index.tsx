import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SafeAreaView from '../../commons/header/safe-area-view';
import Button from '../../components/button';
import Input from '../../components/input';
import GoogleIcon from '../../../assets/icons/google_icon';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';

import {
  Container,
  Welcome,
  Prompt,
  Choice,
  Terms,
  IconView,
  Service,
  ButtonView
} from './styles';

interface SignupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SignupScreen(props: SignupScreenProp) {
  const { colors, fonts } = useThemeContext();
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Welcome>Welcome</Welcome>
          <Prompt>sign up or log in</Prompt>
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
              fontSize: fonts.LARGE_SIZE,
              marginBottom: '6%'
            }}
          />
          <Button
            title="Get Started with email"
            buttonStyle={{ height: 60 }}
            onPress={() => props.navigation.navigate('SignUpScreenTwo')}
          />
          <Choice>or</Choice>
          <ButtonView>
            <Button
              title="Continue with facebook"
              buttonStyle={{
                height: 60,
                borderColor: colors.FACEBOOK_COLOR,
                borderWidth: 1,
                backgroundColor: colors.BG_WHITE_COLOR
              }}
              textStyle={{ color: colors.FACEBOOK_COLOR }}
            >
              <IconView>
                <Ionicons
                  name="logo-facebook"
                  size={30}
                  color={colors.FACEBOOK_COLOR}
                />
              </IconView>
            </Button>
          </ButtonView>

          <ButtonView>
            <Button
              title="Continue with Google"
              buttonStyle={{
                height: 60,
                borderColor: colors.GOOGLE_COLOR,
                borderWidth: 1,
                backgroundColor: colors.BG_WHITE_COLOR
              }}
              textStyle={{ color: colors.GOOGLE_COLOR }}
            >
              <IconView>
                <GoogleIcon />
              </IconView>
            </Button>
          </ButtonView>
          <Terms>
            By signing up, you agree to our
            <Service> Terms of Service</Service>
          </Terms>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}
