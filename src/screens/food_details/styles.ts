import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const FoodImage = styled.Image``;

export const FoodDetailContainer = styled.View`
  align-items: center;
  width: 53%;
  justify-content: space-evenly;
`;

export const FoodDetailHeader = styled.Text`
  margin-top: 15px;
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
  margin-top: 10px;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  opacity: 0.8;
`;

export const ProductsContainer = styled.View`
  align-items: center;
  height: 40%;
  justify-content: space-between;
  margin-top: 25px;
`;

export const ProductHeaders = styled.View``;

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

export const ProductsList = styled.View`
  flex-direction: row;
`;

export const ProductBox = styled.View`
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
  height: 169px;
  margin-left: 10px;
  margin-right: 10px;
  width: 116px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-align: center;
`;

export const ProductImage = styled.Image`
  width: 50%;
  height: 50%;
`;

export const ProductText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-align: center;
`;
