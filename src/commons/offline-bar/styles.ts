import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  padding-top: ${Constants.statusBarHeight}px;
  background-color: ${({ theme }) => theme.colors.BUTTON_DARK_GRAY_COLOR};
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.JOST_MEDIUM};
  color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  padding: 10px;
`;
