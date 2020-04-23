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
  align-items: center;
  width: 80%;
`;

export const QuestionContainer = styled.View`
  height: 18%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 15}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const QuestionRelevanceHeader = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_HEAVY};
  text-transform: uppercase;
  opacity: 0.3;
  margin-bottom: 5px;
`;

export const QuestionRelevanceTextContainer = styled.View`
  width: 80%;
  margin-bottom: 20px;
`;

export const QuestionRelevanceText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  text-align: center;
`;

export const AnswersContainer = styled.View`
  margin-top: 40px;
  margin-bottom: 20px;
  height: 340px;
  width: 100%;
`;

export const AnswerOption = styled.TouchableOpacity`
  margin-bottom: 8px;
  height: 50px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
`;

export const AnswerOptionText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  line-height: 60px;
  padding-left: 10px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ModalView = styled.View`
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  height: 400px;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
`;

export const ModalHeaderText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 15}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
`;

export const ModalBodyText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  width: 80%;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  opacity: 0.7;
`;

export const ModalButtonContainer = styled.View`
  height: 120px;
  justify-content: space-between;
`;
