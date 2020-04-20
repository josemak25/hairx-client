import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome, CancelSetupButton } from './styles';
import { useThemeContext } from '../../theme';

interface RegimenSetupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenSetupScreen(props: RegimenSetupScreenProp) {
  const { colors } = useThemeContext();
  const { navigation } = props;

  return (
    <Container>
      <CancelSetupButton onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={22} color={colors.BG_WHITE_COLOR} />
      </CancelSetupButton>
      <Button title="Regimen setup screen button" />
      <Welcome>Regimen Setup Screen</Welcome>
    </Container>
  );
}
