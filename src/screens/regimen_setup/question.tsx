import React from 'react';
import { FlatList } from 'react-native';
import { useThemeContext } from '../../theme';
import Button from '../../components/button';

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
  ButtonContainer
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
    <Container>
      <RegimenQuestionBody>
        <QuestionContainer>
          <QuestionTitle>{question}</QuestionTitle>
          <QuestionRelevanceHeader>Question Relevance</QuestionRelevanceHeader>
          <QuestionRelevanceText>{questionRelevance}</QuestionRelevanceText>
        </QuestionContainer>
        <AnswersContainer>
          <FlatList
            data={options}
            showsVerticalScrollIndicator={false}
            keyExtractor={option => option}
            renderItem={({ item }) => {
              return (
                <AnswerOption>
                  <AnswerOptionText>{item}</AnswerOptionText>
                </AnswerOption>
              );
            }}
          />
        </AnswersContainer>
        <ButtonContainer>
          <Button
            title={`${index === 0 ? 'go back' : 'previous'}`}
            buttonStyle={{
              width: 120,
              backgroundColor: colors.BG_WHITE_COLOR,
              borderWidth: 1,
              borderColor: colors.BG_WHITE_COLOR
            }}
            onPress={index === 0 ? handleGoBack : handlePrevious}
            textStyle={{ color: colors.FONT_DARK_COLOR, opacity: 0.3 }}
          />
          <Button
            title={`${index !== 2 ? 'next' : 'login'}`}
            buttonStyle={{
              width: 120,
              backgroundColor: colors.BG_WHITE_COLOR,
              borderWidth: 1,
              borderColor: colors.INACTIVE_FIELD_COLOR
            }}
            onPress={index !== 2 ? handleNext : handleDone}
            textStyle={{ color: colors.FONT_DARK_COLOR }}
          />
        </ButtonContainer>
      </RegimenQuestionBody>
    </Container>
  );
}
