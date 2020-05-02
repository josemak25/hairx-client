import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const Welcome = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
`;

export const FoodImage = styled.Image`
  /* background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0; */
`;

export const FoodDetailContainer = styled.View`
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
`;

export const FoodDetailHeader = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
`;

export const FoodDetailBenefits = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.FONT_BLUE_COLOR};
`;

export const FoodDetailText = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  opacity: 0.8;
`;

export const ProductsContainer = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const ProductsHeader1 = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-transform: uppercase;
  opacity: 0.3;
  text-align: center;
`;

export const ProductsHeader2 = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-transform: uppercase;
  text-align: center;
`;

export const ProductBox = styled.View``;
export const Product = styled.Text``;
