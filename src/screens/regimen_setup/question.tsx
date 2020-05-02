import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useThemeContext } from '../../theme';

import {
  Container,
  QuestionContainer,
  QuestionTitle,
  QuestionRelevanceHeader,
  QuestionRelevanceText,
  AnswersContainer,
  AnswerOption,
  AnswerOptionText,
  QuestionRelevanceTextContainer
} from './styles';

interface RenderItemProp {
  testID?: string;
  question: string;
  questionRelevance: string;
  index: number;
  options: string[];
}

export default function RenderItem(props: RenderItemProp) {
  const { colors } = useThemeContext();

  const [selectedOption, setSelectedOption] = useState(null);

  const { question, questionRelevance, options } = props;

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
              onPress={() => setSelectedOption(item)}
            >
              <AnswerOptionText>{item}</AnswerOptionText>
            </AnswerOption>
          ))}
        </AnswersContainer>
      </Container>
    </ScrollView>
  );
}
