import React, { useState, useRef } from 'react';
import { StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import { NavigationInterface } from '../types';
import applyScale from '../../utils/applyScale';
import { useThemeContext } from '../../theme';
import FoodScreen from './food';
import RoutineScreen from './routine';
import SaloonVisitScreen from './SaloonVisitScreen';

import {
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  Container,
  HeaderTab,
  HeaderTabButton
} from './styles';

const TOP_NAV_HEADER_ROUTES = ['routine', 'foods', 'saloon visits'];

interface RecommendationScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RecommendationScreen(props: RecommendationScreenProp) {
  const { colors } = useThemeContext();

  const [routineTabTitle, foodsTabTitle, saloonVisit] = TOP_NAV_HEADER_ROUTES;

  const [state, setState] = useState({ activeHeader: routineTabTitle });

  const sliderRef = useRef<{ goToSlide(index: number): void }>(null);

  const handleSlideChange = (index: number) => {
    setState({ ...state, activeHeader: TOP_NAV_HEADER_ROUTES[index] });
  };

  const handleTopNavSelect = (topBarTitle: string) => {
    const nextScrollIndex = TOP_NAV_HEADER_ROUTES.indexOf(topBarTitle);
    sliderRef.current.goToSlide(nextScrollIndex);
    setState({ ...state, activeHeader: topBarTitle });
  };

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
        <HeaderTab>
          <HeaderTabButton onPress={() => handleTopNavSelect(routineTabTitle)}>
            <HeaderTitleLabel
              style={{
                opacity: state.activeHeader === routineTabTitle ? 1 : 0.5,
                textDecorationLine:
                  state.activeHeader === routineTabTitle ? 'underline' : 'none'
              }}
            >
              {routineTabTitle}
            </HeaderTitleLabel>
          </HeaderTabButton>
          <HeaderTabButton onPress={() => handleTopNavSelect(foodsTabTitle)}>
            <HeaderTitleLabel
              style={{
                marginLeft: applyScale(30),
                marginRight: applyScale(30),
                opacity: state.activeHeader === foodsTabTitle ? 1 : 0.5,
                textDecorationLine:
                  state.activeHeader === foodsTabTitle ? 'underline' : 'none'
              }}
            >
              {foodsTabTitle}
            </HeaderTitleLabel>
          </HeaderTabButton>
          <HeaderTabButton onPress={() => handleTopNavSelect(saloonVisit)}>
            <HeaderTitleLabel
              style={{
                opacity: state.activeHeader === saloonVisit ? 1 : 0.5,
                textDecorationLine:
                  state.activeHeader === saloonVisit ? 'underline' : 'none'
              }}
            >
              {saloonVisit}
            </HeaderTitleLabel>
          </HeaderTabButton>
        </HeaderTab>
        <AppIntroSlider
          testID="slider"
          scrollEnabled={true}
          renderItem={({ item }) => {
            switch (item) {
              case foodsTabTitle:
                return <FoodScreen {...props} key={item} />;

              case saloonVisit:
                return <SaloonVisitScreen {...props} key={item} />;

              default:
                return <RoutineScreen {...props} key={item} />;
            }
          }}
          onSlideChange={handleSlideChange}
          showSkipButton={false}
          showNextButton={false}
          showPrevButton={false}
          showDoneButton={false}
          hidePagination={true}
          slides={TOP_NAV_HEADER_ROUTES}
          ref={sliderRef}
          keyExtractor={(item: string) => item}
        />
      </Container>
    </SafeAreaView>
  );
}
