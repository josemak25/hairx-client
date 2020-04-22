import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const SplashTopStatusBar = styled.View`
  width: 100%;
  height: ${Constants.statusBarHeight}px;
  position: absolute;
  top: 0;
`;

export const SplashTopContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SplashTopHeader = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const SplashTopHeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 4}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
  padding: 20px;
`;

export const SplashBottomContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  padding: 0px 20px;
`;

export const SplashTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 20}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
  padding: 25px 0px;
  align-self: flex-start;
`;

export const SplashContent = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 6}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  line-height: 30px;
  padding-right: 10px;
  align-self: flex-start;
`;

export const SplashButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  padding-bottom: 20px;
`;
