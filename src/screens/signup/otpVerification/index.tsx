import React from 'react';
import SafeAreaView from '../../../commons/header/safe-area-view';
import Header from '../../../commons/header/header';
import {
  HeaderTitleContainer,
  HeaderTitleOf,
  HeaderTitleNumber
} from './style';

export default function componentName() {
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
      ></Header>
    </SafeAreaView>
  );
}
