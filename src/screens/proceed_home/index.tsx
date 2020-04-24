import React from 'react';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import Header from '../../commons/header/header';
import Button from '../../components/button';

import {
  Container,
  AccentText,
  PrimaryText,
  Placeholder,
  HeaderTitleContainer,
  HeaderTitle
} from './styles';

interface ProceedHomeScreenProp extends NavigationInterface {
  testID?: string;
}

export default function ProceedHomeScreen(props: ProceedHomeScreenProp) {
  const { navigation } = props;

  return (
    <SafeAreaView>
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>hairx</HeaderTitle>
          </HeaderTitleContainer>
        )}
      />
      <Container>
        <AccentText>That was quick, Claire</AccentText>
        <PrimaryText>You are done with the basics</PrimaryText>
        <Placeholder
          source={require('../../../assets/images/placeholder.png')}
        />
        <Button
          title="Proceed home"
          buttonStyle={{ width: 180, marginTop: 30 }}
          textStyle={{ textTransform: 'none' }}
          onPress={() => navigation.navigate('RegimenScreen')}
        />
      </Container>
    </SafeAreaView>
  );
}
