import styled from 'styled-components/native';
import applyScale from '../../../utils/applyScale';

export const AnswerOption = styled.TouchableOpacity`
  height: ${applyScale(302)}px;
  width: ${applyScale(154)}px;
  justify-content: space-evenly;
  flex: 1;
  align-items: center;
  margin: 5px 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
`;

export const AnswerOptionText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
`;

export const AnswerOptionDetailsHeader = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
`;
export const AnswerOptionDetailsText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  width: 80%;
  text-align: center;
`;
