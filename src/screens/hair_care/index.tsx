import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/button';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import Header from '../../commons/header/header';
import { useThemeContext } from '../../theme';
import { Animated } from 'react-native';

import {
  Container,
  Welcome,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  RefreshButton
} from './styles';

interface HairCareScreenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function HairCareScreen(props: HairCareScreenScreenProp) {
  const { colors } = useThemeContext();
  const [state] = useState({ animation: new Animated.Value(0) });

  const handleRefresh = () => {};

  const startAnimation = () => {
    handleRefresh();
    Animated.timing(state.animation, {
      toValue: 360,
      duration: 1000
    }).start(() => {
      state.animation.setValue(0);
    });
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
          <AnimatedRefreshButton
            onPress={startAnimation}
            underlayColor="rgba(59, 59, 59, 0.5)"
            style={{
              transform: [
                {
                  rotate: rotateInterpolation
                }
              ]
            }}
          >
            <Ionicons
              name="md-refresh"
              size={25}
              color={colors.BUTTON_DARK_COLOR}
            />
          </AnimatedRefreshButton>
        )}
      />

      <Container>
        <Button title="Hair care screen button" />
        <Welcome>Hair Care Screen</Welcome>
      </Container>
    </SafeAreaView>
  );
}

const AnimatedRefreshButton = Animated.createAnimatedComponent(RefreshButton);
