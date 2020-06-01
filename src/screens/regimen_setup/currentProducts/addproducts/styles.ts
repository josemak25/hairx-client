import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';

export const ModalContainer = styled.View`
  width: 100%;
  height: 90%;
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

export const BrandView = styled.View`
  width: ${applyScale(60)}px;
  height: ${applyScale(60)}px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.FONT_LIGHT_COLOR};
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
`;

export const BrandIcon = styled.Image`
  height: 100%;
  width: 100%;
`;

export const CardView = styled.View`
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
  display: flex;
  flex-direction: row;
  width: 97%;
  margin: 3px auto 0;
  padding: 20px 15px;
  align-items: center;
  border-radius: 5px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
`;

export const AvailableProducts = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR_MID_OPACITY};
`;

export const BrandName = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR_MID_OPACITY};
`;

export const ProductCover = styled.View`
  margin-left: 15px;
`;

export const RadioCover = styled.View`
  margin-left: auto;
`;
