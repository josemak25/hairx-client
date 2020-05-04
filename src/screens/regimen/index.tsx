import React, { useState, useEffect } from 'react';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';
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
  HairGoalsBodyContainer
} from './styles';
import { ScrollView, StatusBar } from 'react-native';

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
      <ScrollView contentContainerStyle={{ flex: 1 }}>
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
            <Button
              title="Start Regimen Setup"
              onPress={() => navigation.navigate('RegimenSetupScreen')}
            />
            <Button
              title="See Recommendations"
              onPress={() => navigation.navigate('RecommendationScreen')}
            />
          </HairGoalsBody>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
