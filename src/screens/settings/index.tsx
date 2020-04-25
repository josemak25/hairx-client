import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { StatusBar } from 'react-native';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';

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
  const { colors } = useThemeContext();

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.BG_WHITE_COLOR}
      />
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
