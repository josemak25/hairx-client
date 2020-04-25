import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');

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

export const SaloonCardContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${applyScale(width)}px;
  flex-wrap: wrap;
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
