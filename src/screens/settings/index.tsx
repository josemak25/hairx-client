import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import Header from '../../commons/header/header';

import {
  Container,
  Welcome,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  TextContainer,
  AboutText,
  Description
} from './styles';

interface SettingsScreenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SettingsScreen(props: SettingsScreenScreenProp) {
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
        <Button title="Settings screen button" />
        <Welcome>Settings Screen</Welcome>
      </Container>
    </SafeAreaView>
  );
}
