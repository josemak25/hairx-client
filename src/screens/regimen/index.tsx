import React, { useRef } from 'react';
import { NavigationInterface } from '../types';
import { StatusBar, TouchableOpacity } from 'react-native';
import { useThemeContext } from '../../theme';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';

import {
  Container,
  Welcome,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  HeaderTab
} from './styles';
import applyScale from '../../utils/applyScale';

interface RegimenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenScreen(props: RegimenScreenProp) {
  const { colors } = useThemeContext();
  const { navigation } = props;
  const headerTabRef = useRef({
    routineRef: null,
    foodRef: null,
    saloonVisitsRef: null
  });

  const handleClick = (ref: any, routePath: string) => {
    //First set existing textDecorationLine to none
    Object.keys(headerTabRef.current).forEach(key =>
      headerTabRef.current[key].setNativeProps({
        style: {
          textDecorationLine: 'none',
          opacity: 0.5
        }
      })
    );

    //Now set textDecorationLine to underline for this ref
    ref.setNativeProps({
      style: {
        textDecorationLine: 'underline',
        opacity: 1
      }
    });
  };

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
            <HeaderTitleLabel>regimen</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
      />
      <HeaderTab>
        <TouchableOpacity
          onPress={() => {
            handleClick(headerTabRef.current.routineRef, '');
          }}
        >
          <HeaderTitleLabel
            ref={ref => {
              headerTabRef.current.routineRef = ref;
            }}
            style={{ opacity: 0.5 }}
          >
            routine
          </HeaderTitleLabel>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleClick(headerTabRef.current.foodRef, '');
          }}
        >
          <HeaderTitleLabel
            style={{
              marginLeft: applyScale(30),
              marginRight: applyScale(30),
              opacity: 0.5
            }}
            ref={ref => {
              headerTabRef.current.foodRef = ref;
            }}
          >
            foods
          </HeaderTitleLabel>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleClick(headerTabRef.current.saloonVisitsRef, '');
          }}
        >
          <HeaderTitleLabel
            ref={ref => {
              headerTabRef.current.saloonVisitsRef = ref;
            }}
            style={{ opacity: 0.5 }}
          >
            saloon visits
          </HeaderTitleLabel>
        </TouchableOpacity>
      </HeaderTab>
      <Container>
        <Button
          title="Start Regimen Setup"
          onPress={() => navigation.navigate('RegimenSetupScreen')}
        />
        <Welcome>Regimen Screen</Welcome>
      </Container>
    </SafeAreaView>
  );
}
