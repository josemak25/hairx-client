import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import Header from '../../commons/header/header';
import { useThemeContext } from '../../theme';
import { Animated } from 'react-native';
import Button from '../../components/button';

import {
  Container,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  RefreshButton,
  ProfileSection,
  ProfileImage,
  Username,
  HairConditionSummary,
  HairConditionLabel,
  HairConditionValueSection,
  HairConditionValue,
  VisitedSaloonContainer,
  EmptyListContainer,
  EmptyListText
} from './styles';

interface HairCareScreenScreenProp extends NavigationInterface {
  testID?: string;
  visitedSaloons: { date: string; issue: string }[];
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

      <Container contentContainerStyle={{ alignItems: 'center' }}>
        <ProfileSection>
          <ProfileImage
            source={require('../../../assets/images/logo.png')}
            style={{ resizeMode: 'center' }}
          />
          <Username>Claire tamara</Username>
          <HairConditionSummary>
            <HairConditionValueSection>
              <HairConditionLabel>Status</HairConditionLabel>
              <HairConditionValue>Natural</HairConditionValue>
            </HairConditionValueSection>
            <HairConditionValueSection>
              <HairConditionLabel>Type</HairConditionLabel>
              <HairConditionValue>Curly</HairConditionValue>
            </HairConditionValueSection>
            <HairConditionValueSection>
              <HairConditionLabel>Salon visits</HairConditionLabel>
              <HairConditionValue>0</HairConditionValue>
            </HairConditionValueSection>
          </HairConditionSummary>
        </ProfileSection>
        <VisitedSaloonContainer>
          {!props.visitedSaloons.length && (
            <EmptyListContainer>
              <EmptyListText>
                When you visit a salon, the care that was administered to you
                will show up here.
              </EmptyListText>
              <Button
                title="Book session at JHB Studio"
                onPress={() => {}}
                buttonStyle={{ marginTop: 100 }}
              />
            </EmptyListContainer>
          )}
        </VisitedSaloonContainer>
      </Container>
    </SafeAreaView>
  );
}

const AnimatedRefreshButton = Animated.createAnimatedComponent(RefreshButton);

HairCareScreen.defaultProps = {
  visitedSaloons: [{ date: 'April 7, 2020', issue: 'Hair loss' }]
};
