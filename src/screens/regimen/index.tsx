import React, { useState } from 'react';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';
import { goals } from '../../libs/regimen_hair_goals.json';
import { AntDesign } from '@expo/vector-icons';
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
  HairGoalsOptionText,
  CancelOption
} from './styles';
import { ScrollView } from 'react-native';

interface RegimenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenScreen(props: RegimenScreenProp) {
  const { navigation } = props;
  const { colors } = useThemeContext();

  const [selectedOptions, setSelectedOptions] = useState([]);

  const RenderGoals = () => (
    <HairGoalsOptionsContainer>
      {goals.map((item, index) => {
        const isSelected = selectedOptions.includes(index);
        return (
          <HairGoalsOption
            key={index}
            onPress={() => {
              setSelectedOptions([...selectedOptions, index]);
            }}
            style={{
              backgroundColor: isSelected
                ? colors.BG_LIGHT_GOLD_COLOR
                : colors.INPUT_FIELD_COLOR
            }}
          >
            <HairGoalsOptionText>{item.text}</HairGoalsOptionText>
            {isSelected && (
              <CancelOption
                onPress={() => {
                  setSelectedOptions([
                    ...selectedOptions.filter(
                      selectedIndex => selectedIndex !== index
                    )
                  ]);
                }}
              >
                <AntDesign
                  name="close"
                  size={12}
                  color={colors.BG_WHITE_COLOR}
                />
              </CancelOption>
            )}
          </HairGoalsOption>
        );
      })}
    </HairGoalsOptionsContainer>
  );

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
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
                  Select your special hair goals and we’ll help you set up a
                  regimen that works for your specific hair type.
                </HairGoalsBodyText>
              </HairGoalsBodyContainer>
            </HairGoalsTitleContainer>
            <RenderGoals />
            <Button
              title="Start Regimen Setup"
              onPress={() => navigation.navigate('RegimenSetupScreen')}
            />
          </HairGoalsBody>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
