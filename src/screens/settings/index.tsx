import React from 'react';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import Header from '../../commons/header/header';

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
import { useThemeContext } from '../../theme';

interface SettingsScreenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SettingsScreen(props: SettingsScreenScreenProp) {
  const { colors } = useThemeContext();

  const settingsOptions = [
    'Edit account details',
    'Adjust notifications',
    'Contact us'
  ];

  return (
    <SafeAreaView>
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>hairx</HeaderTitle>
            <HeaderTitleLabel>settings</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
      />
      <Container>
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
          {settingsOptions.map((item, index) => (
            <SettingsItem key={index} onPress={() => {}}>
              <SettingsText>{item}</SettingsText>
            </SettingsItem>
          ))}
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
