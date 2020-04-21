import React, { useState, useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import Button from '../../components/button';
import Header from '../../commons/header/header';
import SafeAreaView from '../../commons/header/safe-area-view';
import { questions } from '../../libs/regimen_setup.json';
import Question from './question';
import applyScale from '../../utils/applyScale';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

import {
  Container,
  HeaderTitle,
  HeaderTitleNumber,
  HeaderTitleOf,
  CancelSetupButton,
  HeaderTitleContainer,
  RegimenQuestionBody,
  QuestionContainer,
  QuestionTitle,
  QuestionRelevanceHeader,
  QuestionRelevanceText,
  AnswersContainer,
  AnswerOption,
  AnswerOptionText,
  ButtonContainer,
  Button1,
  Button2,
  ButtonText
} from './styles';

export type QuestionItem = {
  key: string;
  index: number;
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

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef<{ goToSlide(index: number): void }>(null);

  const handleNextButton = () => {
    const nextScrollIndex = currentSlide + 1;
    sliderRef.current.goToSlide(nextScrollIndex);
    handleSlideChange(nextScrollIndex);
  };

  const handlePreviousButton = () => {
    const previousScrollIndex = currentSlide - 1;
    sliderRef.current.goToSlide(previousScrollIndex);
    handleSlideChange(previousScrollIndex);
  };

  const handleSlideChange = (index: number) => setCurrentSlide(index);

  return (
    <SafeAreaView>
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>Regimen Question {currentSlide + 1}</HeaderTitle>
            <HeaderTitleOf>of</HeaderTitleOf>
            <HeaderTitleNumber>10</HeaderTitleNumber>
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
          />
        )}
        onSlideChange={handleSlideChange}
        showSkipButton={false}
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
