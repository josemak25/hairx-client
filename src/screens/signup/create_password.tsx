import React, { useState } from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeContext } from '../../theme';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';
import Input from '../../commons/input';

import {
  Container,
  NavigationView,
  Pagination,
  Welcome,
  Prompt,
  OfText,
  BackButton
} from './styles';

interface CreatePasswordProp extends NavigationInterface {
  testID?: string;
}

export default function CreatePassword(props: CreatePasswordProp) {
  const { navigation } = props;
  const { colors, fonts } = useThemeContext();

  const [profile, setProfile] = useState({
    fullName: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (type: string) => (value: string) => {
    setProfile({ ...profile, [type]: value });
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.BG_WHITE_COLOR}
      />
      <Header
        headerLeft={() => (
          <BackButton onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color={colors.INACTIVE_FIELD_COLOR}
            />
          </BackButton>
        )}
        title={() => (
          <NavigationView>
            <Pagination>
              3<OfText> of </OfText>4
            </Pagination>
          </NavigationView>
        )}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container style={{ paddingTop: 0 }}>
          <Welcome style={{ marginTop: '15%' }}>Good to have you</Welcome>
          <Prompt>create password</Prompt>
          <Input
            defaultValue={profile.fullName}
            onChangeText={handleChange('fullName')}
            placeholder="Claire Tamara"
            textInputStyle={{
              height: 60,
              fontSize: fonts.LARGE_SIZE,
              marginBottom: '8%'
            }}
          />
          <Input
            inputLabel="Create Password"
            placeholder="******"
            defaultValue={profile.password}
            onChangeText={handleChange('password')}
            secureTextEntry={true}
            inputLabelStyle={{ fontSize: fonts.LARGE_SIZE + 3 }}
            textInputStyle={{
              height: 60,
              fontSize: fonts.LARGE_SIZE,
              marginBottom: '3%'
            }}
          />
          <Input
            inputLabel="Confirm Password"
            placeholder="******"
            defaultValue={profile.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            secureTextEntry={true}
            inputLabelStyle={{ fontSize: fonts.LARGE_SIZE + 3 }}
            textInputStyle={{
              height: 60,
              fontSize: fonts.LARGE_SIZE,
              marginBottom: '8%'
            }}
          />
          <Button
            title="Proceed"
            buttonStyle={{ height: 60 }}
            textStyle={{ fontSize: fonts.LARGE_SIZE }}
            onPress={() => navigation.navigate('PhoneVerificationScreen')}
          />
        </Container>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
