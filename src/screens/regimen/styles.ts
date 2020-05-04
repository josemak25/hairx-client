import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
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

export const HeaderTab = styled.View`
  justify-content: space-between;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${applyScale(50)}px;
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
  border-top-width: 1px;
  border-top-color: rgba(112, 112, 112, 0.3);
`;

export const SubHeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE * 2}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
`;

export const HeaderSection = styled.View`
  flex: 1;
  align-items: center;
`;

export const CardContent = styled.TouchableOpacity`
  flex: 1;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_LEMON_COLOR};
  margin: 6px;
`;

export const TextContainer = styled.View`
  flex: 1;
  margin: 19px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  margin-bottom: 15px;
`;
export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.8;
  margin-top: 7px;
`;

export const ImageContainer = styled.View`
  flex: 1;
`;

export const ReadMore = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_ITALIC};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.8;
  align-self: flex-end;
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 20px;
`;

export const HairGoalsTitleContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding: 0px 30px;
`;

export const HairGoalsTitleText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 15}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-transform: uppercase;
  text-align: center;
  padding: 10px 0px;
`;

export const HairGoalsBodyText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 6}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  text-align: center;
  line-height: 30px;
`;

export const HairGoalsOptionsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 10px;
  margin-top: 60px;
  margin-bottom: 70px;
`;

export const HairGoalsOption = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
  border: 1px solid
    ${({ theme }) => theme.colors.INACTIVE_FIELD_COLOR_LOW_OPACITY};
  border-radius: 5px;
  margin: 5px 5px;
`;

export const CancelOption = styled.TouchableOpacity`
  width: ${applyScale(20)}px;
  height: ${applyScale(20)}px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-left: 10px;
`;

export const HairGoalsOptionText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  opacity: 0.7;
`;
