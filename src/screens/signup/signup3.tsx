import React from 'react';
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
        
      </SafeAreaView>
    </Container>
  );
}
