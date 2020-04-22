import React from 'react';
import SafeAreaView from '../../../commons/header/safe-area-view';
import Header from '../../../commons/header/header';
import {
  HeaderTitleContainer,
  HeaderTitleOf,
  HeaderTitleNumber,
  CancelSetupButton
} from './style';
import { NavigationInterface } from '../../types';

interface OTPVerificationProps extends NavigationInterface {
  testID?: string;
}

export default function OTPVerification(props: OTPVerificationProps) {
  return (
    <SafeAreaView>
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitleNumber>4</HeaderTitleNumber>
            <HeaderTitleOf>of</HeaderTitleOf>
            <HeaderTitleNumber>4</HeaderTitleNumber>
          </HeaderTitleContainer>
        )}
        headerLeft={() => <CancelSetupButton></CancelSetupButton>}
      ></Header>
    </SafeAreaView>
  );
}
