import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/button';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import Header from '../../commons/header/header';
import { useThemeContext } from '../../theme';

import {
  Container,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  RefreshButton
} from './styles';
import { Animated, Easing, Text } from 'react-native';

interface HairCareScreenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function HairCareScreen(props: HairCareScreenScreenProp) {
  const { colors } = useThemeContext();
  const [state] = useState({ animation: new Animated.Value(0) });

  const handleRefresh = () => {};

  const startAnimation = () => {
    handleRefresh();
    state.animation.setValue(0);
    Animated.timing(state.animation, {
      toValue: 360,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true
    }).start();
  };

  const rotateInterpolation = state.animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  });

  return (
    <SafeAreaView>
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
        <Text>Hair Care Screen</Text>
      </Container>
    </SafeAreaView>
  );
}
