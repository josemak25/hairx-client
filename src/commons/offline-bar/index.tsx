//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { StatusBar, AppState } from 'react-native';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import Animated, { Easing } from 'react-native-reanimated';
import { useThemeContext } from '../../theme';

import { Container, Label } from './styles';

const ANIMATION_CONSTANTS = {
  DURATION: 800,
  TO_VALUE: 4,
  INPUT_RANGE: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
  OUTPUT_RANGE: [0, -15, 0, 15, 0, -15, 0, 15, 0]
};

const AnimatedText = Animated.createAnimatedComponent(Label);

export default function OfflineBar({ offlineText }: { offlineText?: string }) {
  const { colors } = useThemeContext();

  const defaultOfflineText = 'You are not connected to Internet';

  const [network, setNetwork] = useState({
    isConnected: true,
    animation: new Animated.Value(0),
    offlineText: offlineText ? offlineText : defaultOfflineText
  });

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(setNetworkStatus);
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      unsubscribe();
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [network.isConnected]);

  const triggerAnimation = () => {
    network.animation.setValue(0);

    Animated.timing(network.animation, {
      duration: ANIMATION_CONSTANTS.DURATION,
      toValue: ANIMATION_CONSTANTS.TO_VALUE,
      easing: Easing.bounce
    }).start();
  };

  const setNetworkStatus = (state: NetInfoState) => {
    if (state.isConnected && !state.isInternetReachable) {
      setNetwork({ ...network, offlineText: 'Internet is not reachable' });
    }

    if (state.isConnected && state.isInternetReachable) {
      setNetwork({
        ...network,
        isConnected: state.isConnected,
        offlineText: defaultOfflineText
      });
    }

    if (state) triggerAnimation();
  };

  const handleAppStateChange = (nextAppState: string) => {
    if (nextAppState === 'active') NetInfo.fetch().then(setNetworkStatus);
  };

  const interpolated = network.animation.interpolate({
    inputRange: ANIMATION_CONSTANTS.INPUT_RANGE,
    outputRange: ANIMATION_CONSTANTS.OUTPUT_RANGE
  });

  return !network.isConnected ? (
    <Container>
      <StatusBar backgroundColor={colors.BUTTON_DARK_GRAY_COLOR} />
      <AnimatedText style={{ transform: [{ translateX: interpolated }] }}>
        {network.offlineText}
      </AnimatedText>
    </Container>
  ) : null;
}
