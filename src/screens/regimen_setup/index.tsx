import React, { useState, useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import Header from '../../commons/header/header';
import SafeAreaView from '../../commons/header/safe-area-view';
import { questions } from '../../libs/regimen_setup.json';
import Question from './question';
import applyScale from '../../utils/applyScale';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

const SLIDE_INCREMENT = 1;

import {
  HeaderTitle,
  HeaderTitleNumber,
  HeaderTitleOf,
  CancelSetupButton,
  HeaderTitleContainer
} from './styles';

export type QuestionItem = {
  key: string;
  question: string;
  questionRelevance: string;
  options: string[];
};

interface RegimenSetupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenSetupScreen(props: RegimenSetupScreenProp) {
  const { colors } = useThemeContext();

  const { navigation } = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const sliderRef = useRef<{ goToSlide(index: number): void }>(null);

  const handleNextButton = () => {
    const nextScrollIndex = currentQuestion + SLIDE_INCREMENT;
    sliderRef.current.goToSlide(nextScrollIndex);
    handleSlideChange(nextScrollIndex);
  };

  const handlePreviousButton = () => {
    const previousScrollIndex = currentQuestion - SLIDE_INCREMENT;
    sliderRef.current.goToSlide(previousScrollIndex);
    handleSlideChange(previousScrollIndex);
  };

  const handleGoBackButton = () => navigation.goBack();

  const handleDoneButton = () => navigation.replace('RegimenScreen');

  const handleSlideChange = (index: number) => setCurrentQuestion(index);

  return (
    <SafeAreaView>
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>
              Regimen Question {currentQuestion + SLIDE_INCREMENT}
            </HeaderTitle>
            <HeaderTitleOf>of</HeaderTitleOf>
            <HeaderTitleNumber>{questions.length}</HeaderTitleNumber>
          </HeaderTitleContainer>
        )}
        headerRight={() => (
          <CancelSetupButton onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={15} color={colors.BG_WHITE_COLOR} />
          </CancelSetupButton>
        )}
      />
      <AppIntroSlider
        testID="slider"
        renderItem={({ item }) => (
          <Question
            key={item.key}
            {...item}
            handleNext={handleNextButton}
            handlePrevious={handlePreviousButton}
            handleGoBack={handleGoBackButton}
            handleDone={handleDoneButton}
          />
        )}
        onSlideChange={handleSlideChange}
        showSkipButton={false}
        showNextButton={false}
        showPrevButton={false}
        showDoneButton={false}
        activeDotStyle={{
          width: 0,
          height: 0
        }}
        dotStyle={{
          width: 0,
          height: 0
        }}
        paginationStyle={{
          height: 50,
          top: applyScale(SCREEN_HEIGHT / 2 - 100)
        }}
        slides={questions}
        ref={sliderRef}
      />
    </SafeAreaView>
  );
}
