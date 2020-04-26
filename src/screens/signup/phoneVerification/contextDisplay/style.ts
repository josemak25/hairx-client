import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';

export const Container = styled.View`
  width: 100%;
  height: ${applyScale(60)}px;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
  padding: 0px 15px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 3}px;
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.7;
`;

export const Change = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
