import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';

export const Container = styled.View`
  width: 100%;
  height: ${applyScale(60)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
  z-index: 999;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
`;

export const HeaderBackTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
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
  width: ${applyScale(70)}px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
