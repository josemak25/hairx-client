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
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
`;

export const HeaderTitleOf = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  padding: 0px 5px;
`;

export const HeaderTitleNumber = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
`;

export const CancelSetupButton = styled.TouchableOpacity`
  width: ${applyScale(25)}px;
  height: ${applyScale(25)}px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.BUTTON_DARK_COLOR};
`;

export const Welcome = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
`;

export const RegimenQuestionBody = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

export const QuestionSection = styled.View`
  height: 100px;
  width: 240px;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionHeader = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 15}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-transform: uppercase;
`;

export const QuestionRelevanceHeader = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_HEAVY};
  text-transform: uppercase;
  opacity: 0.3;
`;

export const QuestionRelevanceBody = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  text-align: center;
`;

export const AnswerOption = styled.View``;

export const AnswerOptionText = styled.Text``;
