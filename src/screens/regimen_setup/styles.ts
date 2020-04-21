import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

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
`;

export const QuestionSection = styled.View`
  height: ${deviceHeight * 0.18}px;
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

export const AnswerSection = styled.View`
  height: ${deviceHeight * 0.5}px;
  /* margin-top: -20px; */
`;

export const AnswerOption = styled.TouchableOpacity`
  width: ${deviceWidth * 0.8}px;
  margin-bottom: 8px;
  height: 50px;
  border-radius: 5px;
  background-color: #f4f4f4;
`;

export const AnswerOptionText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  line-height: 60px;
  padding-left: 10px;
`;

export const ButtonSection = styled.View`
  flex-direction: row;
  width: ${deviceWidth * 0.8}px;
  justify-content: space-between;
`;

export const Button1 = styled.TouchableOpacity`
  height: 50px;
  width: 117px;
  border-radius: 5px;
`;

export const Button2 = styled.TouchableOpacity`
  height: 50px;
  width: 117px;
  background-color: #3b3b3b;
  border-radius: 5px;
  border: 1px solid #707070;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 1}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-align: center;
  line-height: 60px;
  color: #fff;
`;
