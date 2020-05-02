import React, { useState, useEffect } from 'react';
import { ScrollView, Animated, Easing } from 'react-native';
import { useThemeContext } from '../../theme';
import applyScale from '../../utils/applyScale';

import {
  Container,
  QuestionContainer,
  QuestionTitle,
  QuestionRelevanceHeader,
  QuestionRelevanceText,
  AnswersContainer,
  AnswerOption,
  AnswerOptionText,
  QuestionRelevanceTextContainer,
  AnswerOptionOverlay,
  AnswerOptionContainer
} from './styles';

interface RenderItemProp {
  testID?: string;
  question: string;
  questionRelevance: string;
  index: number;
  options: string[];
}

const AnimatedAnswerOptionOverlay = Animated.createAnimatedComponent(
  AnswerOptionOverlay
);

export default function RenderItem(props: RenderItemProp) {
  const [animation, setAnimation] = useState({ selected: '' });

  useEffect(() => {
    const optionAnimationValues = options.reduce((acc, item) => {
      acc[item] = new Animated.Value(0);
      return acc;
    }, {});

    setAnimation({ ...animation, ...optionAnimationValues });
  }, []);

  const startButtonAnimation = (answer: string) => {
    if (answer === animation.selected) return;

    setAnimation({ ...animation, selected: answer });

    if (animation.selected && answer !== animation.selected) {
      Animated.timing(animation[animation.selected], {
        toValue: 0,
        duration: 300,
        easing: Easing.elastic(0.7)
      }).start();
    }

    Animated.timing(animation[answer], {
      toValue: applyScale(373),
      duration: 500,
      easing: Easing.elastic(0.7)
    }).start();
  };

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
            <AnswerOptionContainer key={item}>
              <AnswerOptionText>{item}</AnswerOptionText>
              <AnimatedAnswerOptionOverlay style={{ width: animation[item] }} />
              <AnswerOption onPress={() => startButtonAnimation(item)} />
            </AnswerOptionContainer>
          ))}
        </AnswersContainer>
      </Container>
    </ScrollView>
  );
}
