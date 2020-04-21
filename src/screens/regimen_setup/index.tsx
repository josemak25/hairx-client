import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import Header from '../../commons/header/header';
import SafeAreaView from '../../commons/header/safe-area-view';

import {
  Container,
  HeaderTitle,
  HeaderTitleNumber,
  HeaderTitleOf,
  CancelSetupButton,
  HeaderTitleContainer,
  RegimenQuestionBody,
  QuestionSection,
  QuestionHeader,
  QuestionRelevanceHeader,
  QuestionRelevanceBody,
  AnswerSection,
  AnswerOption,
  AnswerOptionText,
  ButtonSection,
  Button1,
  Button2,
  ButtonText
} from './styles';

interface RegimenSetupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenSetupScreen(props: RegimenSetupScreenProp) {
  const { colors } = useThemeContext();
  const { navigation } = props;

  return (
    <SafeAreaView>
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>Regimen Question 1</HeaderTitle>
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
      <Container>
        <RegimenQuestionBody>
          <QuestionSection>
            <QuestionHeader>HOW OLD ARE YOU?</QuestionHeader>
            <QuestionRelevanceHeader>
              Question Relevance
            </QuestionRelevanceHeader>
            <QuestionRelevanceBody>
              This helps to understand how strong your hair scalps will be. The
              older you are, the stronger your scalps and vice versa.
            </QuestionRelevanceBody>
          </QuestionSection>
          <AnswerSection>
            <AnswerOption>
              <AnswerOptionText>18 or less</AnswerOptionText>
            </AnswerOption>
            <AnswerOption>
              <AnswerOptionText>19 - 25</AnswerOptionText>
            </AnswerOption>
            <AnswerOption>
              <AnswerOptionText>26 - 35</AnswerOptionText>
            </AnswerOption>
            <AnswerOption>
              <AnswerOptionText>36 - 45</AnswerOptionText>
            </AnswerOption>
            <AnswerOption>
              <AnswerOptionText>46 - 55</AnswerOptionText>
            </AnswerOption>
            <AnswerOption>
              <AnswerOptionText>55 and over</AnswerOptionText>
            </AnswerOption>
          </AnswerSection>
          <ButtonSection>
            <Button1>
              <ButtonText
                style={{ color: '#000', opacity: 0.3, textAlign: 'left' }}
              >
                Previous
              </ButtonText>
            </Button1>
            <Button2>
              <ButtonText>Next</ButtonText>
            </Button2>
          </ButtonSection>
        </RegimenQuestionBody>
      </Container>
    </SafeAreaView>
  );
}
