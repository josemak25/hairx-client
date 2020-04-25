import React, { useState, Fragment } from 'react';
import { FlatList, StatusBar, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';
import ResponsiveImage from '../../libs/responsiveImage';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';
import SaloonCard from './saloon_card';

import {
  Container,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  RefreshButton,
  ProfileSection,
  Username,
  ProfileImage,
  HairConditionSummary,
  HairConditionLabel,
  HairConditionValueSection,
  HairConditionValue,
  EmptyListContainer,
  EmptyListText,
  EmptySaloonCard,
  EmptySaloonCardText
} from './styles';

const AnimatedRefreshButton = Animated.createAnimatedComponent(RefreshButton);

interface HairCareScreenScreenProp extends NavigationInterface {
  testID?: string;
  visitedSaloons: { date: string; issue: string }[];
}

export default function HairCareScreen(props: HairCareScreenScreenProp) {
  const { navigation, visitedSaloons } = props;
  const {
    state: { grid }
  } = useStoreContext();

  const { colors } = useThemeContext();
  const [state] = useState({ animation: new Animated.Value(0) });

  const handleRefresh = () => {};

  const startAnimation = () => {
    handleRefresh();
    Animated.timing(state.animation, {
      toValue: 360,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(() => state.animation.setValue(0));
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
            style={{ transform: [{ rotate: rotateInterpolation }] }}
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
        <FlatList
          ListHeaderComponent={() => (
            <ProfileSection>
              <ProfileImage>
                <ResponsiveImage
                  height={70}
                  width={70}
                  imageUrl="https://bit.ly/2W1BG3K"
                  style={{
                    backgroundColor: colors.BG_LIGHT_BLUE_COLOR,
                    borderRadius: 70 / 2
                  }}
                />
              </ProfileImage>
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
          )}
          ListHeaderComponentStyle={{ marginBottom: 20 }}
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
          numColumns={grid.numOfColumn}
          renderItem={({ item, index }) => {
            if (
              visitedSaloons.length % 2 !== 0 &&
              visitedSaloons.length - 1 === index
            ) {
              return (
                <Fragment>
                  <SaloonCard {...item} navigation={navigation} />
                  <EmptySaloonCard>
                    <EmptySaloonCardText>No data yet</EmptySaloonCardText>
                  </EmptySaloonCard>
                </Fragment>
              );
            }

            return <SaloonCard {...item} navigation={navigation} />;
          }}
          keyExtractor={(_item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 30, paddingBottom: 20 }}
          style={{ width: '90%' }}
        />
      </Container>
    </SafeAreaView>
  );
}

HairCareScreen.defaultProps = {
  visitedSaloons: new Array(11).fill({
    date: 'April 7, 2020',
    issue: 'Hair loss'
  })
};
