import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/button';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import { useThemeContext } from '../../theme';

import {
  Container,
  Welcome,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  RefreshButton
} from './styles';
import { StatusBar } from 'react-native';

interface HairCareScreenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function HairCareScreen(props: HairCareScreenScreenProp) {
  const { colors } = useThemeContext();

  const handleRefresh = () => {};

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
            <HeaderTitleLabel>care</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
        headerRight={() => (
          <RefreshButton
            onPress={handleRefresh}
            underlayColor="rgba(59, 59, 59, 0.5)"
          >
            <Ionicons
              name="md-refresh"
              size={25}
              color={colors.BUTTON_DARK_COLOR}
            />
          </RefreshButton>
        )}
      />

      <Container>
        <Button title="Hair care screen button" />
        <Welcome>Hair Care Screen</Welcome>
      </Container>
    </SafeAreaView>
  );
}
