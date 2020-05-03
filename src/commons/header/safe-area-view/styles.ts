import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.select({
    ios: 0,
    android: StatusBar.currentHeight
  })}px;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;
