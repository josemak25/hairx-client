import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
`;

export const EmptyCartContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const EmptyCartTextContainer = styled.View`
  flex: 0.7;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const EmptyCartTextHolder = styled.View``;

export const EmptyCartTittle = styled.Text`
  width: ${applyScale(250)}px;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  padding: 10px;
  text-transform: capitalize;
`;

export const EmptyCartDescription = styled.Text`
  width: ${applyScale(270)}px;
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
`;
