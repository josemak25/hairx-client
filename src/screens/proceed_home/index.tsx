import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';
import applyScale from '../../utils/applyScale';
import ProceedHomeIcon from '../../../assets/icons/proceed_home_icon';

import {
  Container,
  ContainerHeaderTexts,
  AccentText,
  PrimaryText,
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
      <Container
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
        showsVerticalScrollIndicator={false}
      >
        <ContainerHeaderTexts>
          <AccentText>That was quick, Claire</AccentText>
          <PrimaryText>You are done with the basics</PrimaryText>
        </ContainerHeaderTexts>
        <ProceedHomeIcon />
        <Button
          title="Proceed home"
          buttonStyle={{
            width: '70%',
            height: applyScale(60),
            bottom: applyScale(30),
            marginTop: applyScale(20)
          }}
          textStyle={{ textTransform: 'none' }}
          onPress={() => navigation.replace('HomeScreen')}
        />
      </Container>
    </SafeAreaView>
  );
}
