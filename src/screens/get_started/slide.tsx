import React from 'react';
import { useThemeContext } from '../../theme';
import Button from '../../components/button';

import {
  Container,
  SplashTopContainer,
  SplashTopHeader,
  SplashTopHeaderTitle,
  SplashBottomContainer,
  SplashTitle,
  SplashContent,
  SplashButtons
} from './styles';

interface RenderItemProp {
  testID?: string;
  title: string;
  text: string;
  index: number;
  backgroundColor: string;
  handleNext(): void;
  handleDone(): void;
  handleSkip(): void;
}

export default function RenderItem(props: RenderItemProp) {
  const { colors } = useThemeContext();

  const {
    title,
    text,
    backgroundColor,
    index,
    handleNext,
    handleDone,
    handleSkip
  } = props;

  return (
    <Container>
      <SplashTopContainer style={{ backgroundColor }}>
        <SplashTopHeader>
          <SplashTopHeaderTitle>hairx</SplashTopHeaderTitle>
        </SplashTopHeader>
      </SplashTopContainer>
      <SplashBottomContainer>
        <SplashTitle>{title}</SplashTitle>
        <SplashContent>{text}</SplashContent>
        <SplashButtons>
          <Button
            title="skip"
            buttonStyle={{
              width: 120,
              backgroundColor: colors.BG_WHITE_COLOR,
              borderWidth: 1,
              borderColor: colors.BG_WHITE_COLOR
            }}
            onPress={handleSkip}
            textStyle={{ color: colors.FONT_DARK_COLOR, opacity: 0.3 }}
          />
          <Button
            title={`${index !== 2 ? 'next' : 'login'}`}
            buttonStyle={{
              width: 120,
              backgroundColor: colors.BG_WHITE_COLOR,
              borderWidth: 1,
              borderColor: colors.INACTIVE_FIELD_COLOR
            }}
            onPress={index !== 2 ? handleNext : handleDone}
            textStyle={{ color: colors.FONT_DARK_COLOR }}
          />
        </SplashButtons>
      </SplashBottomContainer>
    </Container>
  );
}
