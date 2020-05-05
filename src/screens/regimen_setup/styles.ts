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

export const QuestionContainer = styled.View`
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
`;

export const QuestionRelevanceText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  text-align: center;
`;

export const AnswersContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const AnswerOptionContainer = styled.View`
  height: ${applyScale(60)}px;
  width: 100%;
  justify-content: center;
  margin: 5px 0px;
  border-radius: 5px;
`;

export const AnswerOption = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  border-radius: 5px;
  padding: 0px 10px;
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
`;

export const AnswerOptionOverlay = styled.View`
  height: 100%;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_GOLD_COLOR};
  z-index: 9;
`;

export const AnswerOptionText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  padding-left: 20px;
  position: absolute;
  z-index: 999;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 30px 20px;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const ModalView = styled.View`
  width: 100%;
  height: ${applyScale(400)}px;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ModalHeaderText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 15}px;
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-transform: uppercase;
`;

export const ModalBodyText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  width: 80%;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  opacity: 0.7;
`;

export const ModalButtons = styled.View`
  width: 85%;
  align-items: center;
  padding-bottom: 10px;
`;

export const ResumeContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const ModalHairType = styled.Text`
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  margin: 10% 0 5%;
`;

export const ModalHairTypeDuration = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 15}px;
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
`;

export const ResumeSetupTextContainer = styled.View`
  width: 80%;
`;

export const ResumeSetupHeaderText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 15}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 5px;
`;

export const ResumeSetupBodyText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  text-align: center;
  margin-bottom: 5px;
`;

export const ResumeImage = styled.Image`
  width: 80%;
  height: 30%;
`;

export const HeaderTitleLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  padding: 0px 5px;
`;

export const LoadDropDownContainer = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
`;
