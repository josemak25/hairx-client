import React from 'react';
import { StatusBar as Bar } from 'react-native';
import { useThemeContext } from '../../theme';

import { Container } from './styles';

type BarStyleProp = 'light-content' | 'dark-content';

interface StatusBarProps {
  barStyle: BarStyleProp;
  backgroundColor?: string;
}

export default function StatusBar(props: StatusBarProps) {
  const { colors } = useThemeContext();

  const backgroundColor = props.backgroundColor || colors.DRAWER_COLOR;

  return (
    <Container style={{ backgroundColor: backgroundColor }}>
      <Bar barStyle={props.barStyle} />
    </Container>
  );
}
