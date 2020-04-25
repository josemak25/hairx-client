import React from 'react';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';

import {
  Container,
  Welcome,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel
} from './styles';

interface RegimenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenScreen(props: RegimenScreenProp) {
  const { navigation } = props;

  return (
    <SafeAreaView>
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>hairx</HeaderTitle>
            <HeaderTitleLabel>regimen</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
      />
      <Container>
        <Button
          title="Start Regimen Setup"
          onPress={() => navigation.navigate('RegimenSetupScreen')}
        />
        <Welcome>Regimen Screen</Welcome>
      </Container>
    </SafeAreaView>
  );
}
