import React, { Fragment } from 'react';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import Button from '../../components/button';

import {
  Container,
  SplashTopStatusBar,
  SplashTopContainer,
  SplashTopHeader,
  SplashTopHeaderTitle,
  SplashBottomContainer,
  SplashTitle,
  SplashContent,
  SplashButtons
} from './styles';
import boxShadow from '../../utils/boxShadows';

interface GetStartedScreenProp extends NavigationInterface {
  testID?: string;
  data: { title: string; content: string; color: string };
}

export default function SplashScreen(props: GetStartedScreenProp) {
  const { colors } = useThemeContext();

  const { data, navigation } = props;

  return (
    <Fragment>
      <SplashTopStatusBar style={{ backgroundColor: data.color }} />
      <Container>
        <SplashTopContainer style={{ backgroundColor: data.color }}>
          <SplashTopHeader>
            <SplashTopHeaderTitle>hairx</SplashTopHeaderTitle>
          </SplashTopHeader>
        </SplashTopContainer>
        <SplashBottomContainer>
          <SplashTitle>{data.title}</SplashTitle>
          <SplashContent>{data.content}</SplashContent>
          <SplashButtons>
            <Button
              title="skip"
              buttonStyle={{
                width: 120,
                backgroundColor: colors.BG_WHITE_COLOR,
                borderWidth: 1,
                borderColor: colors.BG_WHITE_COLOR
              }}
              textStyle={{ color: colors.FONT_DARK_COLOR }}
            />
            <Button
              title="next"
              buttonStyle={{
                width: 120,
                backgroundColor: colors.BG_WHITE_COLOR,
                borderWidth: 1,
                borderColor: colors.INACTIVE_FIELD_COLOR
              }}
              textStyle={{ color: colors.FONT_DARK_COLOR }}
            />
          </SplashButtons>
        </SplashBottomContainer>
      </Container>
    </Fragment>
  );
}
