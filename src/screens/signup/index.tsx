import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SafeAreaView from '../../commons/safe-area-view';
import Button from '../../components/button';
import Input from '../../commons/input';
import GoogleIcon from '../../../assets/icons/google_icon';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import applyScale from '../../utils/applyScale';

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
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.BG_WHITE_COLOR}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Container>
          <Welcome>Welcome</Welcome>
          <Prompt>sign up or log in</Prompt>
          <Input
            inputLabel="Email address"
            placeholder="tashacombs@ymmail.com"
            defaultValue={email}
            onChangeText={input => setEmail(input)}
            inputLabelStyle={{ fontSize: fonts.LARGE_SIZE + 3 }}
            textInputStyle={{
              height: applyScale(60),
              fontSize: fonts.LARGE_SIZE,
              marginBottom: '6%'
            }}
          />
          <Button
            title="Get Started with email"
            buttonStyle={{ height: applyScale(60) }}
            onPress={() => props.navigation.navigate('SignUpScreenTwo')}
          />
          <Choice>or</Choice>
          <ButtonView>
            <Button
              title="Continue with facebook"
              buttonStyle={{
                height: applyScale(60),
                borderColor: 'rgba(59, 89, 152, 0.3)',
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
                height: applyScale(60),
                borderColor: 'rgba(212, 70, 56, 0.3)',
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
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
