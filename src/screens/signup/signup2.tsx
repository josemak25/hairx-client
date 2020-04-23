import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';

import Header from '../../commons/header/header';
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

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: 'clairetamara08@gmail.com'
  });

  return (
    <SafeAreaView>
      <Header
        headerLeft={() => (
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color={colors.INACTIVE_FIELD_COLOR}
            />
          </TouchableOpacity>
        )}
        title={() => (
          <NavigationView>
            <Pagination>
              2<OfText> of </OfText>4
            </Pagination>
          </NavigationView>
        )}
      />
      <Container style={{ paddingTop: 0 }}>
        <Welcome style={{ marginTop: '15%' }}>Good to have you</Welcome>
        <Prompt>create account</Prompt>
        <Input
          defaultValue={profile.email}
          onChangeText={input => setProfile({...profile, email: input})}
          placeholder={profile.email}
          textInputStyle={{
            height: 60,
            fontSize: fonts.LARGE_SIZE,
            marginBottom: '8%'
          }}
        />
        <Input
          inputLabel="What's your first name?"
          placeholder="Claire"
          defaultValue={profile.firstName}
          onChangeText={input => setProfile({...profile, firstName: input})}
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
          defaultValue={profile.lastName}
          onChangeText={input => setProfile({...profile, lastName: input})}
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
