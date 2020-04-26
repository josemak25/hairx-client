import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const RefreshButton = styled.TouchableHighlight`
  width: ${applyScale(40)}px;
  height: ${applyScale(40)}px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${applyScale(35)}px;
  height: ${applyScale(35)}px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.INACTIVE_FIELD_COLOR};
`;

export const HeaderTitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
`;

export const HeaderTitleLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  padding: 0px 5px;
`;

export const ContentArea = styled.View`
  flex: 1;
  height: 100%;
`;

export const HairCareSaloonCard = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_GOLD_COLOR};
  width: 80%;
  height: 65px;
  border-radius: 5px;
  align-self: center;
  position: absolute;
  bottom: ${applyScale(-55)}px;
`;

export const CardInfo = styled.View`
  flex: 1;
  justify-content: center;
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
  width: 130px;
  height: 160px;
  align-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 15px 5px;
  margin: 0px 5px;
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
`;

export const ContentLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  text-transform: uppercase;
  opacity: 0.7;
`;

export const ContentValue = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  text-transform: capitalize;
  padding: 10px 0px;
  opacity: 0.7;
`;

export const ValueDegreeContainer = styled.View`
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_BLUE_COLOR};
  position: absolute;
  bottom: ${applyScale(30)}px;
`;

export const ValueDegree = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.BG_DARK_BLUE_COLOR};
  text-align: center;
`;

export const ProductCard = styled.View`
  width: 130px;
  height: 160px;
  border-radius: 5px;
  padding: 15px 5px;
  margin: 0px 5px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
`;

export const ProductDescription = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  opacity: 0.7;
  text-transform: capitalize;
`;

export const ProductBenefit = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  opacity: 0.7;
  text-transform: capitalize;
  padding: 6px 0px;
  padding-bottom: 10px;
`;

export const ProductImage = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  flex-direction: column-reverse;
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

export const ProfileSection = styled.View`
  width: 100%;
  align-items: center;
  align-content: center;
`;

export const EmptySaloonCard = styled.View`
  flex: 1;
  height: 184px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
  margin: 6px;
  border-radius: 5px;
`;

export const EmptySaloonCardText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 8}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.3;
`;

export const ProfileImage = styled.View`
  width: 100%;
  height: 70px;
  align-items: center;
  align-content: center;
`;

export const Username = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE * 2}px;
  font-family: ${({ theme }) => theme.fonts.JOST_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
  margin-top: 21px;
`;

export const HairConditionSummary = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HairConditionValueSection = styled.View`
  justify-content: center;
  align-items: center;
  margin: 13px 20px;
`;

export const HairConditionLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.INACTIVE_FIELD_COLOR};
  text-transform: uppercase;
`;

export const HairConditionValue = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE * 2}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
`;

export const EmptyListContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const EmptyListText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE * 2}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  margin: 0px 25px;
`;

export const Cover = styled.View`
  justify-content: space-evenly;
  width: 100%;
  height: 123px;
  border-radius: 5px;
  overflow: hidden;
`;

export const CoverPart = styled.Image`
  flex: 1;
  height: 100%;
`;

export const DateText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.7;
  margin-top: 13px;
`;

export const CardLabelContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.3;
  text-align: center;
  text-transform: uppercase;
`;

export const CardText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.7;
  margin: 3px;
`;
