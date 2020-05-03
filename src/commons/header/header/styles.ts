import styled from 'styled-components/native';
import applyScale from '../../../utils/applyScale';
import { Platform } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: ${Platform.select({
    ios: applyScale(50),
    android: applyScale(55)
  })}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  z-index: 999;
`;

export const HeaderBackTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  position: absolute;
  right: -10px;
`;

export const HeaderLeft = styled.View`
  width: ${applyScale(70)}px;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const HeaderRight = styled.View`
  width: ${applyScale(50)}px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
