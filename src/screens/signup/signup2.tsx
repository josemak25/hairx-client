import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';

import { Container, Welcome, Prompt, NavigationView, Pagination, OfText } from './styles';

interface SignupScreenTwoProp extends NavigationInterface {
  testID?: string;
}

export default function SignUpScreenTwo(props: SignupScreenTwoProp) {
  const { colors, fonts } = useThemeContext();
  return (
    <Container>
     <SafeAreaView>
         <NavigationView>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={35} color="#707070" />
            </TouchableOpacity>
            <Pagination>2 
                <OfText> of </OfText>
                 4</Pagination>
         </NavigationView>
     </SafeAreaView>
    </Container>
  );
}
