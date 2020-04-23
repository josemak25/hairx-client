import React from 'react';
import Button from '../../components/button';
import { useThemeContext } from '../../theme';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import Header from '../../commons/header/header';

import {
  ResumeContainer,
  ResumeSetupTextContainer,
  ResumeSetupHeaderText,
  ResumeSetupBodyText,
  TakeMeBackButton,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel
} from './styles';

interface ResumeProp extends NavigationInterface {
  testID?: string;
}

export default function ResumeScreen({ navigation }: ResumeProp) {
  const { colors } = useThemeContext();

  return (
    <SafeAreaView>
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>hairx</HeaderTitle>
            <HeaderTitleLabel>regimen</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
      />
      <ResumeContainer>
        <ResumeSetupTextContainer>
          <ResumeSetupHeaderText>Resume setup</ResumeSetupHeaderText>
          <ResumeSetupBodyText>
            Hey Claire, you’ve answered 3 of 10 questions. Continue where you
            left off to set up a bespoke regimen for your hair challenges.
          </ResumeSetupBodyText>
        </ResumeSetupTextContainer>
        {/* <ResumeImage /> */}
        <TakeMeBackButton>
          <Button
            title="take me back"
            buttonStyle={{
              width: 180,
              backgroundColor: colors.BUTTON_DARK_GRAY_COLOR
            }}
            onPress={() => {
              navigation.navigate('RegimenSetupScreen');
            }}
            textStyle={{ color: colors.BG_WHITE_COLOR }}
          />
        </TakeMeBackButton>
      </ResumeContainer>
    </SafeAreaView>
  );
}
