import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const RefreshButton = styled.TouchableHighlight`
  width: ${applyScale(40)}px;
  height: ${applyScale(40)}px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
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

export const ProfileSection = styled.View`
  align-items: center;
  align-content: center;
  top: 15px;
`;

export const ProfileImage = styled.Image`
  width: 66px;
  height: 66px;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_BLUE_COLOR};
  border-radius: 33px;
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

export const VisitedSaloonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const FlatList = styled.FlatList`
  flex: 1;
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

export const SaloonCardContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${applyScale(width)}px;
  flex-wrap: wrap;
`;

export const SaloonCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_GOLD_COLOR};
  width: 155px;
  height: 184px;
  border-radius: 5px;
  align-items: center;
  margin: 3px;
`;

export const Cover = styled.View`
  flex-direction: row;
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
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  opacity: 0.7;
`;

export const CardText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.7;
  margin: 3px;
`;
