import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const Welcome = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
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
  padding-left: 17px;
  padding-right: 17px;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
  border: 1px solid
    ${({ theme }) => theme.colors.INACTIVE_FIELD_COLOR_LOW_OPACITY};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const HairGoalsOptionText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  opacity: 0.7;
`;
