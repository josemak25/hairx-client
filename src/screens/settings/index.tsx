import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import Header from '../../commons/header/header';

import {
  Container,
  Welcome,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel
} from './styles';

interface SettingsScreenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SettingsScreen(props: SettingsScreenScreenProp) {
  return (
    <SafeAreaView>
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>hairx</HeaderTitle>
            <HeaderTitleLabel>settings</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
      />
      <Container>
        <Button title="Settings screen button" />
        <Welcome>Settings Screen</Welcome>
      </Container>
    </SafeAreaView>
  );
}
