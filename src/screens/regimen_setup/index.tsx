import React, { useState, useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationInterface } from '../types';
import { StatusBar } from 'react-native';
import { useThemeContext } from '../../theme';
import Header from '../../commons/header';
import SafeAreaView from '../../commons/safe-area-view';
import Question from './question';
import Button from '../../components/button';
import { questions } from '../../libs/regimen_setup.json';
import applyScale from '../../utils/applyScale';

import {
  HeaderTitle,
  HeaderTitleNumber,
  HeaderTitleOf,
  CancelSetupButton,
  HeaderTitleContainer,
  ModalView,
  ModalHeaderText,
  ModalBodyText,
  ModalButtons,
  ButtonContainer
} from './styles';

export type QuestionItem = {
  key: string;
  question: string;
  questionRelevance: string;
  options: string[];
};

const SLIDE_INCREMENT = 1;
interface RegimenSetupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenSetupScreen(props: RegimenSetupScreenProp) {
  const { colors } = useThemeContext();

  const { navigation } = props;

  const [state, setState] = useState({
    modalVisible: false,
    currentQuestion: 0
  });

  const { modalVisible, currentQuestion } = state;

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

  const handleSlideChange = (index: number) => {
    setState({ ...state, currentQuestion: index });
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
            <HeaderTitle>
              Regimen Question {currentQuestion + SLIDE_INCREMENT}
            </HeaderTitle>
            <HeaderTitleOf>of</HeaderTitleOf>
            <HeaderTitleNumber>{questions.length}</HeaderTitleNumber>
          </HeaderTitleContainer>
        )}
        headerRight={() => (
          <CancelSetupButton
            onPress={() => {
              setState({ ...state, modalVisible: true });
            }}
          >
            <AntDesign name="close" size={15} color={colors.BG_WHITE_COLOR} />
          </CancelSetupButton>
        )}
      />
      <AppIntroSlider
        testID="slider"
        scrollEnabled={true}
        renderItem={({ item }) => (
          <Question
            key={item.key}
            {...item}
            currentQuestion={state.currentQuestion}
            handleGoBack={handleGoBackButton}
          />
        )}
        onSlideChange={handleSlideChange}
        showSkipButton={false}
        showNextButton={false}
        showPrevButton={false}
        showDoneButton={false}
        hidePagination={true}
        slides={questions}
        ref={sliderRef}
      />

      <ButtonContainer>
        <Button
          title="previous"
          buttonStyle={{
            width: applyScale(120),
            backgroundColor: colors.BG_WHITE_COLOR,
            alignItems: 'flex-start',
            paddingLeft: 5,
            borderWidth: 1,
            borderColor: colors.BG_WHITE_COLOR
          }}
          onPress={currentQuestion === 0 ? null : handlePreviousButton}
          textStyle={{
            color: colors.FONT_DARK_COLOR,
            opacity: currentQuestion === 0 ? 0.3 : 1
          }}
        />
        <Button
          title="next"
          buttonStyle={{
            width: applyScale(120),
            backgroundColor: colors.BG_WHITE_COLOR,
            borderWidth: 1,
            borderColor: colors.INACTIVE_FIELD_COLOR
          }}
          onPress={
            currentQuestion !== questions.length - 1 ? handleNextButton : null
          }
          textStyle={{ color: colors.FONT_DARK_COLOR }}
        />
      </ButtonContainer>

      <Modal
        isVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={() => setState({ ...state, modalVisible: false })}
        style={{ display: 'flex', justifyContent: 'flex-end', margin: 0 }}
      >
        <ModalView>
          <ModalHeaderText>Quit regimen?</ModalHeaderText>
          <ModalBodyText>
            You’ve answered {currentQuestion} of {questions.length} questions to
            set up your own bespoke regimen. If you need to do something
            quickly, you can save your progress instead.
          </ModalBodyText>
          <ModalButtons>
            <Button
              title="Save my progress"
              buttonStyle={{
                width: '100%',
                height: 50,
                margin: 5,
                backgroundColor: colors.FONT_DARK_COLOR
              }}
              onPress={() => {
                setState({ ...state, modalVisible: false });
                navigation.goBack();
              }}
              textStyle={{ color: colors.BG_WHITE_COLOR }}
            />
            <Button
              title="Quit & lose progress"
              buttonStyle={{
                width: '100%',
                height: 50,
                margin: 10,
                backgroundColor: colors.BUTTON_LIGHT_COLOR
              }}
              onPress={() => {
                setState({ ...state, modalVisible: false });
                navigation.goBack();
              }}
              textStyle={{ color: colors.FONT_DARK_COLOR }}
            />
          </ModalButtons>
        </ModalView>
      </Modal>
    </SafeAreaView>
  );
}
