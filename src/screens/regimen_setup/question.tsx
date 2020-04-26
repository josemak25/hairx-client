import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useThemeContext } from '../../theme';
import Button from '../../components/button';
import { questions } from '../../libs/regimen_setup.json';
import applyScale from '../../utils/applyScale';
import CurrentProduct from './currentProducts';

import {
  Container,
  QuestionContainer,
  QuestionTitle,
  QuestionRelevanceHeader,
  QuestionRelevanceText,
  AnswersContainer,
  AnswerOption,
  AnswerOptionText,
  ButtonContainer,
  QuestionRelevanceTextContainer
} from './styles';

interface RenderItemProp {
  testID?: string;
  question: string;
  questionRelevance: string;
  index: number;
  options: string[];
  handleNext(): void;
  handleDone(): void;
  handleGoBack(): void;
  handlePrevious(): void;
}

export default function RenderItem(props: RenderItemProp) {
  const { colors, fonts } = useThemeContext();

  const [selectedOption, setSelectedOption] = useState(null);

  const firstItemIndex = 0;
  const lastItemIndex = questions.length - 1;

  const {
    question,
    questionRelevance,
    options,
    index,
    handleNext,
    handlePrevious
  } = props;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: 30,
        paddingBottom: 50,
        alignItems: 'center'
      }}
    >
      <Container style={{ width: '90%', justifyContent: 'flex-start' }}>
        <QuestionContainer>
          <QuestionTitle>{question}</QuestionTitle>
          <QuestionRelevanceHeader>Question Relevance</QuestionRelevanceHeader>
          <QuestionRelevanceTextContainer>
            <QuestionRelevanceText>
              {questionRelevance}
              {/Current/.test(question) && (
                <QuestionRelevanceText
                  style={{
                    fontFamily: fonts.CORMORANT_ITALIC,
                    color: colors.FONT_RED_COLOR,
                    opacity: 0.0
                  }}
                >
                  {` Add at least 3.`}
                </QuestionRelevanceText>
              )}
            </QuestionRelevanceText>
          </QuestionRelevanceTextContainer>
        </QuestionContainer>
        <AnswersContainer>
          {options.map((item, ind) =>
            /Current/.test(question) ? (
              <CurrentProduct key={ind} title={item} />
            ) : (
              <AnswerOption
                key={item}
                style={{
                  backgroundColor:
                    selectedOption === item
                      ? colors.BG_LIGHT_GOLD_COLOR
                      : colors.BUTTON_LIGHT_COLOR
                }}
                onPress={() => {
                  setSelectedOption(item);
                }}
              >
                <AnswerOptionText>{item}</AnswerOptionText>
              </AnswerOption>
            )
          )}
        </AnswersContainer>
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
            onPress={index === firstItemIndex ? null : handlePrevious}
            textStyle={{
              color: colors.FONT_DARK_COLOR,
              opacity: index === firstItemIndex ? 0.3 : 1
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
            onPress={index !== lastItemIndex ? handleNext : null}
            textStyle={{ color: colors.FONT_DARK_COLOR }}
          />
        </ButtonContainer>
      </Container>
    </ScrollView>
  );
}
