import React, { useState, useEffect, Fragment } from 'react';
import { ScrollView, Animated, Easing, ActivityIndicator } from 'react-native';
import { useThemeContext } from '../../theme';
import applyScale from '../../utils/applyScale';
import HairStatusModal from './hair_status_modal';
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
  QuestionRelevanceTextContainer,
  AnswerOptionOverlay,
  AnswerOptionContainer,
  LoadDropDownContainer
} from './styles';

interface RenderItemProp {
  testID?: string;
  question: string;
  questionRelevance: string;
  index: number;
  options: string[];
  optionsDropDown?: string[];
}

const AnimatedAnswerOptionOverlay = Animated.createAnimatedComponent(
  AnswerOptionOverlay
);

export default function RenderItem(props: RenderItemProp) {
  const { colors, fonts } = useThemeContext();

  const [animation, setAnimation] = useState({
    options: { selected: '' },
    optionDropDown: { selected: '' }
  });

  const [hairStatus, setHairStatus] = useState({
    date: '6 months ago',
    showModal: false
  });

  const [dropDown, setDropDown] = useState({
    showDropDown: false,
    loadDropDown: false
  });

  useEffect(() => {
    const optionAnimationValues = options.reduce((acc, item) => {
      acc[item] = new Animated.Value(0);
      return acc;
    }, {});

    const dropDownAnimationValues = optionsDropDown?.reduce((acc, item) => {
      acc[item] = new Animated.Value(0);
      return acc;
    }, {});

    setAnimation({
      ...animation,
      options: { ...animation.options, ...optionAnimationValues },
      optionDropDown: {
        ...animation.optionDropDown,
        ...dropDownAnimationValues
      }
    });
  }, []);

  const startButtonAnimation = (answer: string, buttonType: string) => {
    if (answer === animation[buttonType].selected) return;

    setAnimation({
      ...animation,
      [buttonType]: { ...animation[buttonType], selected: answer }
    });

    if (/Natural|Processed/.test(answer)) loadDropDown();

    if (
      animation[buttonType].selected &&
      answer !== animation[buttonType].selected
    ) {
      const selectedValue = animation[buttonType].selected;

      Animated.timing(animation[buttonType][selectedValue], {
        toValue: 0,
        duration: 300,
        easing: Easing.elastic(0.7)
      }).start();
    }

    Animated.timing(animation[buttonType][answer], {
      toValue: applyScale(buttonType === 'options' ? 373 : 335),
      duration: 500,
      easing: Easing.elastic(0.7)
    }).start(({ finished }) => {
      if (finished && buttonType !== 'optionDropDown') return;
      setHairStatus({ ...hairStatus, showModal: true });
    });
  };

  const loadDropDown = () => {
    setDropDown({ ...dropDown, loadDropDown: true, showDropDown: false });

    setTimeout(() => {
      setDropDown({ ...dropDown, loadDropDown: false, showDropDown: true });
    }, 300);
  };

  const { question, questionRelevance, options, optionsDropDown } = props;

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
          {options.map(item => (
            <AnswerOptionContainer key={item}>
              <AnswerOptionText>{item}</AnswerOptionText>
              <AnimatedAnswerOptionOverlay
                style={{ width: animation['options'][item] }}
              />
              <AnswerOption
                onPress={() => startButtonAnimation(item, 'options')}
              />

              {hairStatus.showModal ? (
                <HairStatusModal
                  isVisible={hairStatus.showModal}
                  hairStatusDate={hairStatus.date}
                  onBackdropPress={() =>
                    setHairStatus({ ...hairStatus, showModal: false })
                  }
                  onChange={(hairStatusDate: string) =>
                    setHairStatus({ ...hairStatus, date: hairStatusDate })
                  }
                />
              ) : null}
            </AnswerOptionContainer>
          ))}

          {dropDown.loadDropDown && (
            <LoadDropDownContainer>
              <ActivityIndicator
                size="large"
                color={colors.BUTTON_DARK_COLOR}
              />
            </LoadDropDownContainer>
          )}

          {optionsDropDown && dropDown.showDropDown ? (
            <Fragment>
              <QuestionRelevanceHeader
                style={{
                  alignSelf: 'flex-start',
                  marginTop: 10,
                  paddingLeft: 20
                }}
              >
                {animation.options.selected} options
              </QuestionRelevanceHeader>
              {optionsDropDown.map(item => (
                <AnswerOptionContainer key={item} style={{ width: '90%' }}>
                  <AnswerOptionText>{item}</AnswerOptionText>
                  <AnimatedAnswerOptionOverlay
                    style={{ width: animation['optionDropDown'][item] }}
                  />
                  <AnswerOption
                    onPress={() => startButtonAnimation(item, 'optionDropDown')}
                  />
                </AnswerOptionContainer>
              ))}
            </Fragment>
          ) : null}
        </AnswersContainer>
      </Container>
    </ScrollView>
  );
}
