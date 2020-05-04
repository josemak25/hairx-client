import React, { useState, Fragment } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { NavigationInterface } from '../types';
import Button from '../../components/button';
import { goals } from '../../libs/regimen_hair_goals.json';

import {
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
  const { navigation } = props;

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectedOption = (goal: string) => {
    setSelectedOptions([...selectedOptions, goal]);
  };

  const cancelSelectedOption = (deleteGoal: string) => {
    setSelectedOptions(selectedOptions.filter(goal => goal !== deleteGoal));
  };

  return (
    <Fragment>
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
    </Fragment>
  );
}
