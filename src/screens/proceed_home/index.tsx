import React from 'react';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import Header from '../../commons/header/header';
import Button from '../../components/button';

import {
  Container,
  AccentText,
  PrimaryText,
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
        <Button title="Proceed home" onPress={() => {}} />
      </Container>
    </SafeAreaView>
  );
}
