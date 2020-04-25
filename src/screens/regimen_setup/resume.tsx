import React from 'react';
import Button from '../../components/button';
import { useThemeContext } from '../../theme';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';

import {
  ResumeContainer,
  ResumeSetupTextContainer,
  ResumeSetupHeaderText,
  ResumeSetupBodyText,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  ResumeImage
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
        <ResumeImage source={require('../../../assets/icon.png')} />
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
