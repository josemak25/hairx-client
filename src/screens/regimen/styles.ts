import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
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

export const HairGoalsBody = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
`;

export const HairGoalsTitleContainer = styled.View`
  height: 18%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const HairGoalsTitleText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 15}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-transform: uppercase;
  text-align: center;
`;

export const HairGoalsBodyContainer = styled.View`
  width: 85%;
`;

export const HairGoalsBodyText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  text-align: center;
`;

export const HairGoalsOptionsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  height: 40%;
`;

export const HairGoalsOption = styled.TouchableOpacity`
  margin-right: 10px;
  margin-bottom: 10px;
  height: 45px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
  border: 1px solid
    ${({ theme }) => theme.colors.INACTIVE_FIELD_COLOR_LOW_OPACITY};
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const CancelOption = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.BUTTON_DARK_COLOR};
  border-radius: 15px;
  width: ${applyScale(15)}px;
  height: ${applyScale(15)}px;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;

export const HairGoalsOptionText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  opacity: 0.7;
  margin-right: 3px;
  margin-left: 3px;
`;
