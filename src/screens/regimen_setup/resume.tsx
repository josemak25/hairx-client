import React from 'react';
import { StatusBar } from 'react-native';
import Button from '../../components/button';
import { useThemeContext } from '../../theme';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import ResumeIcon from '../../../assets/icons/resume_icon';

import {
  ResumeContainer,
  ResumeSetupTextContainer,
  ResumeSetupHeaderText,
  ResumeSetupBodyText,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel
} from './styles';

interface ResumeProp extends NavigationInterface {
  testID?: string;
  currentQuestion: number;
}

export default function ResumeScreen(props: ResumeProp) {
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
      <ResumeContainer>
        <ResumeSetupTextContainer>
          <ResumeSetupHeaderText>Resume setup</ResumeSetupHeaderText>
          <ResumeSetupBodyText>
            Hey Claire, you’ve answered 0 of 5 questions. Continue where you
            left off to set up a bespoke regimen for your hair challenges.
          </ResumeSetupBodyText>
        </ResumeSetupTextContainer>
        <ResumeIcon />
        <Button
          title="Take me back"
          buttonStyle={{
            width: '45%',
            backgroundColor: colors.BUTTON_DARK_GRAY_COLOR
          }}
          onPress={() => navigation.navigate('RegimenSetupScreen')}
          textStyle={{ color: colors.BG_WHITE_COLOR, textTransform: 'none' }}
        />
      </ResumeContainer>
    </SafeAreaView>
  );
}
