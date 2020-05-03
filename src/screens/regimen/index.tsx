import React from 'react';

import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';
import { goals } from '../../libs/regimen_hair_goals.json';
import { useThemeContext } from '../../theme';

import {
  Container,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  HairGoalsBody,
  HairGoalsTitleContainer,
  HairGoalsTitleText,
  HairGoalsBodyText,
  HairGoalsBodyContainer,
  HairGoalsOptionsContainer,
  HairGoalsOption,
  HairGoalsOptionText
} from './styles';

interface RegimenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenScreen(props: RegimenScreenProp) {
  const { colors } = useThemeContext();
  const { navigation } = props;

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.BG_WHITE_COLOR}
      />
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>hairx</HeaderTitle>
            <HeaderTitleLabel>regimen</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
      />
      <Container>
        <HairGoalsBody>
          <HairGoalsTitleContainer>
            <HairGoalsTitleText>Hair goals</HairGoalsTitleText>
            <HairGoalsBodyContainer>
              <HairGoalsBodyText>
                Select your special hair goals and we’d help you set up a
                regimen that works for your specific hair type.
              </HairGoalsBodyText>
            </HairGoalsBodyContainer>
          </HairGoalsTitleContainer>
          <HairGoalsOptionsContainer>
            {goals.map(item => (
              <HairGoalsOption key={item.text}>
                <HairGoalsOptionText>{item.text}</HairGoalsOptionText>
              </HairGoalsOption>
            ))}
          </HairGoalsOptionsContainer>
          <Button
            title="Start Regimen Setup"
            onPress={() => navigation.navigate('RegimenSetupScreen')}
          />
        </HairGoalsBody>
      </Container>
    </SafeAreaView>
  );
}
