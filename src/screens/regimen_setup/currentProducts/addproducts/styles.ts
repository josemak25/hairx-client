import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';

export const ModalContainer = styled.View`
  width: 100%;
  height: ${applyScale(700)}px;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ModalTitle = styled.Text`
  text-transform: capitalize;
  margin: 5% 0;
  font-family: ${({ theme }) => theme.fonts.JOST_MEDIUM};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 3}px;
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
`;

export const ModalTitleProduct = styled.Text`
  text-transform: capitalize;
  margin: 5% 0;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 3}px;
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
`;

export const BrandIcon = styled.Image``;

export const CardView = styled.View``;

export const Name = styled.Text``;

export const AvailableProducts = styled.Text``;
