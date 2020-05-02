import React, { useRef } from 'react';
import { NavigationInterface } from '../types';
import { StatusBar } from 'react-native';
import { useThemeContext } from '../../theme';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import Button from '../../components/button';
import SubHeaderSection from './sub_header_section';
import {
  Container,
  Welcome,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel
} from './styles';

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
      <SubHeaderSection navigation={navigation} />
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
