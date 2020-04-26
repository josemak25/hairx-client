import React, { useState, useEffect } from 'react';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';
import { goals } from '../../libs/regimen_hair_goals.json';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  ButtonContainer,
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

interface RegimenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenScreen(props: RegimenScreenProp) {
  const { colors } = useThemeContext();
  const { navigation } = props;

  const [selectedOptions, setSelectedOptions] = useState([]);

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
        <Welcome>Regimen Screen</Welcome>

        <ButtonContainer>
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
            <Button
              title="See Activities"
              onPress={() => navigation.navigate('ActivityScreen')}
            />
          </HairGoalsBody>
        </ButtonContainer>
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
          <HairGoalsOptionsContainer>
            {goals.map(item => (
              <HairGoalsOption
                key={item.text}
                onPress={() => {
                  item.isSelected = true;
                  setSelectedOptions([...selectedOptions, item]);
                }}
                style={{
                  backgroundColor:
                    item.isSelected === true
                      ? colors.BG_LIGHT_GOLD_COLOR
                      : colors.INPUT_FIELD_COLOR
                }}
              >
                <HairGoalsOptionText>{item.text}</HairGoalsOptionText>
                {item.isSelected && (
                  <CancelOption
                    onPress={() => {
                      item.isSelected = false;
                      setSelectedOptions([
                        selectedOptions.filter(
                          option => option.isSelected !== item.isSelected
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
