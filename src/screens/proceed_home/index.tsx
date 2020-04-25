import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';
import applyScale from '../../utils/applyScale';

import {
  Container,
  ContainerHeaderTexts,
  AccentText,
  PrimaryText,
  Placeholder,
  HeaderTitleContainer,
  HeaderTitle
} from './styles';

interface ProceedHomeScreenProp extends NavigationInterface {
  testID?: string;
}

export default function ProceedHomeScreen(props: ProceedHomeScreenProp) {
  const { navigation } = props;
  const { colors } = useThemeContext();

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.BG_WHITE_COLOR}
      />
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>hairx</HeaderTitle>
          </HeaderTitleContainer>
        )}
      />
      <Container>
        <ContainerHeaderTexts>
          <AccentText>That was quick, Claire</AccentText>
          <PrimaryText>You are done with the basics</PrimaryText>
        </ContainerHeaderTexts>
        <Placeholder
          source={require('../../../assets/images/placeholder.png')}
        />
        <Button
          title="Proceed home"
          buttonStyle={{
            width: '70%',
            height: applyScale(60),
            bottom: applyScale(30)
          }}
          textStyle={{ textTransform: 'none' }}
          onPress={() => navigation.replace('HomeScreen')}
        />
      </Container>
    </SafeAreaView>
  );
}
