import React, { useState } from 'react';
import { TouchableWithoutFeedback, StatusBar, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';
import Input from '../../commons/input';
import applyScale from '../../utils/applyScale';

import {
  Container,
  Welcome,
  Prompt,
  NavigationView,
  Pagination,
  OfText,
  BackButton
} from './styles';

interface CreateAccountProp extends NavigationInterface {
  testID?: string;
}

export default function CreateAccount(props: CreateAccountProp) {
  const { navigation } = props;

  const { colors, fonts } = useThemeContext();

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: ''
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
              2<OfText> of </OfText>4
            </Pagination>
          </NavigationView>
        )}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container
          style={{ paddingTop: 0 }}
          showsVerticalScrollIndicator={false}
        >
          <Welcome style={{ marginTop: '15%' }}>Good to have you</Welcome>
          <Prompt>create account</Prompt>
          <Input
            defaultValue={profile.email}
            onChangeText={handleChange('email')}
            placeholder="clairetamara08@gmail.com"
            textInputStyle={{
              height: applyScale(60),
              fontSize: fonts.LARGE_SIZE,
              marginBottom: '8%'
            }}
          />
          <Input
            inputLabel="What's your first name?"
            placeholder="Claire"
            defaultValue={profile.firstName}
            onChangeText={handleChange('firstName')}
            inputLabelStyle={{ fontSize: fonts.LARGE_SIZE + 3 }}
            textInputStyle={{
              height: applyScale(60),
              fontSize: fonts.LARGE_SIZE,
              marginBottom: '3%'
            }}
          />
          <Input
            inputLabel="What's your last name?"
            placeholder="Tamara"
            defaultValue={profile.lastName}
            onChangeText={handleChange('lastName')}
            inputLabelStyle={{ fontSize: fonts.LARGE_SIZE + 3 }}
            textInputStyle={{
              height: applyScale(60),
              fontSize: fonts.LARGE_SIZE,
              marginBottom: '8%'
            }}
          />
          <Button
            title="Proceed"
            buttonStyle={{ height: applyScale(60) }}
            textStyle={{ fontSize: fonts.LARGE_SIZE }}
            onPress={() => navigation.navigate('CreatePasswordScreen')}
          />
        </Container>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
