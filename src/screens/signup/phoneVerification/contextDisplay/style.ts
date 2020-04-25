import styled from 'styled-components/native';
import { theme } from '../../../../theme/types';
import applyScale from '../../../../utils/applyScale';

export const Container = styled.View`
  width: 100%;
  height: ${applyScale(45)}px;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
`;

export const Text = styled.Text`
  opacity: 0.7;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  height: ${applyScale(18)}px;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
`;

export const Change = styled.TouchableOpacity`
  width: 90%;
  height: ${applyScale(45)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
