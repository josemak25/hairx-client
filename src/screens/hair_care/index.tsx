import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import { useThemeContext } from '../../theme';
import { Animated } from 'react-native';
import Button from '../../components/button';
import { Dimensions } from 'react-native';
import applyScale from '../../utils/applyScale';

const { width } = Dimensions.get('screen');

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
  EmptyListText,
  SaloonCard,
  Cover,
  CardLabel,
  CardLabelContainer,
  CardText,
  DateText,
  CoverPart,
  FlatList
} from './styles';
import { StatusBar } from 'react-native';

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
          <FlatList
            ListEmptyComponent={
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
            }
            data={props.visitedSaloons}
            //@ts-ignore
            renderItem={({ item: { date, issue } }) => (
              <SaloonCard onPress={() => {}}>
                <Cover>
                  <CoverPart
                    source={require('../../../assets/images/before.jpg')}
                  />
                  <CoverPart
                    source={require('../../../assets/images/after-image.jpg')}
                  />
                </Cover>
                <DateText>{date}</DateText>
                <CardLabelContainer>
                  <CardLabel>issue:</CardLabel>
                  <CardText>{issue}</CardText>
                </CardLabelContainer>
              </SaloonCard>
            )}
            keyExtractor={(_item, index) => index.toString()}
            contentContainerStyle={{
              alignItems: 'center',
              width: applyScale(width)
            }}
            showsVerticalScrollIndicator={false}
          />
        </VisitedSaloonContainer>
      </Container>
    </SafeAreaView>
  );
}

const AnimatedRefreshButton = Animated.createAnimatedComponent(RefreshButton);

HairCareScreen.defaultProps = {
  visitedSaloons: new Array(11).fill({
    date: 'April 7, 2020',
    issue: 'Hair loss'
  })
};
