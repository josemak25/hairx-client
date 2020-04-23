import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useThemeContext } from '../../theme';
import { NavigationInterface } from '../types';

import Header from '../../commons/header/header';
import SafeAreaView from '../../commons/header/safe-area-view';
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
  const [password, setPassword] = useState('');
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
              3<OfText> of </OfText>4
            </Pagination>
          </NavigationView>
        )}
      />
      <Container style={{ paddingTop: 0 }}>
        <Welcome style={{ marginTop: '15%' }}>Good to have you</Welcome>
        <Prompt>create account</Prompt>
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
        <Input
          inputLabel="Create Password"
          placeholder="........"
          defaultValue={password}
          onChangeText={input => setPassword(input)}
          secureTextEntry={true}
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
          inputLabel="Confirm Password"
          placeholder="........"
          defaultValue={password}
          onChangeText={input => setPassword(input)}
          secureTextEntry={true}
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
          onPress={() => props.navigation.navigate('SignUpScreenFour')}
        />
      </Container>
    </SafeAreaView>
  );
}
