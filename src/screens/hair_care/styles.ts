import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const BackButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BACK_BUTTON_BG_COLOR};
  width: 28px;
  height: 28px;
  border-radius: 14px;
  position: absolute;
  top: 40px;
  left: 5px;
`;

export const Cover = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  height: 350px;
  border-radius: 5px;
`;

export const BeforeImage = styled.Image`
  flex: 1;
  height: 100%;
`;
export const AfterImage = styled.Image`
  flex: 1;
  height: 100%;
`;

export const ContentArea = styled.View`
  flex: 1;
`;

export const HairCareSaloonCard = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_GOLD_COLOR};
  width: 80%;
  height: 65px;
  margin-top: -15px;
  border-radius: 5px;
  align-self: center;
`;

export const CardInfo = styled.View`
  flex: 1;
  justify-content: center;
`;

export const CardLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.3;
  text-align: center;
  text-transform: uppercase;
`;

export const CardValue = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
`;

export const AssessmentCardContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  margin: 0px 10px;
`;

export const AssessmentLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE * 2}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  margin: 26px 0px;
  text-transform: uppercase;
`;

export const AssessmentCard = styled.View`
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
  width: 116px;
  height: 139px;
  border-radius: 5px;
  margin: 0px 5px;
`;

export const AssessmentCardContent = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
`;

export const ContentLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  text-transform: uppercase;
  margin-top: 20px;
  opacity: 0.7;
`;

export const ContentValue = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE * 2}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  text-transform: capitalize;
  opacity: 0.7;
`;

export const ValueDegreeContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_BLUE_COLOR};
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin-top: 20px;
`;

export const ValueDegree = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.BG_DARK_BLUE_COLOR};
  text-align: center;
`;

export const ProductCard = styled.View`
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
  width: 116px;
  height: 154px;
  border-radius: 5px;
  margin: 0px 5px;
`;

export const ProductDescription = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  opacity: 0.7;
  text-transform: capitalize;
  margin-top: 20px;
`;

export const ProductBenefit = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  opacity: 0.7;
  text-transform: capitalize;
  margin-top: 20px;
`;

export const ProductImage = styled.Image`
  flex: 1;
  height: 100%;
`;

export const RecommendationContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0px 15px;
`;

export const RecommendationView = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_GOLD_COLOR};
  border-radius: 5px;
  padding: 14px 19px;
  margin-bottom: 10px;
`;

export const Recommendation = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
`;

export const RecommendationFrequency = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
`;
