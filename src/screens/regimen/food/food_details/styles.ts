import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const ContentArea = styled.View`
  flex: 1;
  height: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${applyScale(35)}px;
  height: ${applyScale(35)}px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.INACTIVE_FIELD_COLOR};
`;

export const FoodDetailHeader = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  padding: 4px 30px;
  text-align: center;
`;

export const FoodDetailBenefits = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 2}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_BLUE_COLOR};
  text-transform: uppercase;
  padding: 5px 30px;
  text-align: center;
`;

export const FoodDetailText = styled.Text`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  opacity: 0.8;
  padding: 5px 20px;
  line-height: 30px;
  text-align: center;
`;

export const ProductsContainer = styled.View`
  margin-top: 25px;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
`;

export const SubHeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE * 2}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
`;

export const HeaderSection = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductCard = styled.View`
  width: 130px;
  height: 160px;
  border-radius: 5px;
  padding: 10px 4px;
  margin: 0px 5px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
`;

export const ProductTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  opacity: 0.7;
  text-transform: capitalize;
`;

export const ProductImage = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const ProductPrice = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-align: center;
`;
