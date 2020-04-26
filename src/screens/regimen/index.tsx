import React from 'react';
import { NavigationInterface } from '../types';
import { StatusBar } from 'react-native';
import { useThemeContext } from '../../theme';
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
  const { colors } = useThemeContext();
  const { navigation } = props;

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
