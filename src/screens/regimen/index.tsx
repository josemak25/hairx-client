import React from 'react';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { ScrollView, StatusBar } from 'react-native';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import RegimenGoalSetupScreen from './goal-setup';

import {
  Container,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel
} from './styles';

interface RegimenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenScreen(props: RegimenScreenProp) {
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
            <HeaderTitleLabel>regimen</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <RegimenGoalSetupScreen {...props} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
