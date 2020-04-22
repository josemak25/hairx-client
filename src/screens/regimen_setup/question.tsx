import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useThemeContext } from '../../theme';
import Button from '../../components/button';
import { questions } from '../../libs/regimen_setup.json';

import {
  Container,
  RegimenQuestionBody,
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
  const { colors } = useThemeContext();

  const [selectedOption, setSelectedOption] = useState(null);

  const firstItemIndex = 0;
  const lastItemIndex = questions.length - 1;

  const {
    question,
    questionRelevance,
    options,
    index,
    handleNext,
    handleDone,
    handleGoBack,
    handlePrevious
  } = props;

  return (
    <ScrollView>
      <Container>
        <RegimenQuestionBody>
          <QuestionContainer>
            <QuestionTitle>{question}</QuestionTitle>
            <QuestionRelevanceHeader>
              Question Relevance
            </QuestionRelevanceHeader>
            <QuestionRelevanceTextContainer>
              <QuestionRelevanceText>{questionRelevance}</QuestionRelevanceText>
            </QuestionRelevanceTextContainer>
          </QuestionContainer>
          <AnswersContainer>
            {options.map(item => (
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
            ))}
          </AnswersContainer>
          <ButtonContainer>
            <Button
              title="previous"
              buttonStyle={{
                width: 120,
                backgroundColor: colors.BG_WHITE_COLOR,
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
              title={`${index !== lastItemIndex ? 'next' : 'login'}`}
              buttonStyle={{
                width: 120,
                backgroundColor: colors.BG_WHITE_COLOR,
                borderWidth: 1,
                borderColor: colors.INACTIVE_FIELD_COLOR
              }}
              onPress={index !== lastItemIndex ? handleNext : handleDone}
              textStyle={{ color: colors.FONT_DARK_COLOR }}
            />
          </ButtonContainer>
        </RegimenQuestionBody>
      </Container>
    </ScrollView>
  );
}
