import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';

import {
  Container,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  TextContainer,
  AboutText,
  Description,
  OptionsContainer,
  SettingsItem,
  SettingsText
} from './styles';

interface SettingsScreenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SettingsScreen(props: SettingsScreenScreenProp) {
  const { colors } = useThemeContext();

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
            <HeaderTitleLabel>settings</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
      />
      <Container
        contentContainerStyle={{ alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <TextContainer>
          <AboutText>About hairX</AboutText>
          <Description>
            Hair growth and maintenance can be a difficult process to manage,
            that’s why we created HairX. Use the app to generate a bespoke
            regimen for your unique hair challenges, get daily reminders and
            make salon bookings and track your growth.
          </Description>
        </TextContainer>
        <OptionsContainer>
          <SettingsItem onPress={() => {}}>
            <SettingsText>Edit account details</SettingsText>
          </SettingsItem>

          <SettingsItem onPress={() => {}}>
            <SettingsText>Adjust notifications</SettingsText>
          </SettingsItem>

          <SettingsItem onPress={() => {}}>
            <SettingsText>Contact us</SettingsText>
          </SettingsItem>

          <SettingsItem onPress={() => {}}>
            <SettingsText style={{ color: colors.FONT_RED_COLOR }}>
              Log out
            </SettingsText>
          </SettingsItem>
        </OptionsContainer>
      </Container>
    </SafeAreaView>
  );
}
