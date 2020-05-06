import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useThemeContext } from '../../theme';
import { StatusBar } from 'react-native';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import { ScrollView } from 'react-native';
import { NavigationInterface } from '../types';
import Button from '../../components/button';
import { goals } from '../../libs/regimen_hair_goals.json';

import {
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  Container,
  HairGoalsTitleContainer,
  HairGoalsTitleText,
  HairGoalsBodyText,
  HairGoalsOptionsContainer,
  HairGoalsOption,
  HairGoalsOptionText,
  CancelOption
} from './styles';

interface RegimenGoalSetupProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenGoalSetupScreen(props: RegimenGoalSetupProp) {
  const { colors } = useThemeContext();

  const { navigation } = props;

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectedOption = (goal: string) => {
    setSelectedOptions([...selectedOptions, goal]);
  };

  const cancelSelectedOption = (deleteGoal: string) => {
    setSelectedOptions(selectedOptions.filter(goal => goal !== deleteGoal));
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
            <HeaderTitle>hairx</HeaderTitle>
            <HeaderTitleLabel>regimen</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
      />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <HairGoalsTitleContainer>
            <HairGoalsTitleText>Hair goals</HairGoalsTitleText>
            <HairGoalsBodyText>
              Select your special hair goals and we’ll help you set up a regimen
              that works for your specific hair type.
            </HairGoalsBodyText>
          </HairGoalsTitleContainer>
          <HairGoalsOptionsContainer>
            {goals.map(goal => (
              <HairGoalsOption
                onPress={() => handleSelectedOption(goal.text)}
                key={goal.index}
                style={{
                  backgroundColor: selectedOptions.some(
                    selectedOption => selectedOption === goal.text
                  )
                    ? goal.selectedColor
                    : null
                }}
              >
                <HairGoalsOptionText>{goal.text}</HairGoalsOptionText>
                {selectedOptions.some(
                  selectedOption => selectedOption === goal.text
                ) && (
                  <CancelOption onPress={() => cancelSelectedOption(goal.text)}>
                    <AntDesign
                      name="closecircle"
                      size={16}
                      style={{ opacity: 0.7 }}
                    ></AntDesign>
                  </CancelOption>
                )}
              </HairGoalsOption>
            ))}
          </HairGoalsOptionsContainer>
          <Button
            title="Start Regimen Setup"
            onPress={() => navigation.navigate('RegimenSetupScreen')}
            buttonStyle={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 17,
              paddingBottom: 17
            }}
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
