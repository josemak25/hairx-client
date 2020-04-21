import styled from 'styled-components/native';
import { theme } from '../../../../../theme/types';

export const Container = styled.View`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
`;

export const Text = styled.Text`
  text-align: left;
  opacity: 0.7;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  width: 206px;
  height: 18px;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE};
`;

export const ButtonStyle = {
  Mainbutton: {},
  textStyle: {
    width: 63,
    height: 18,
    fontSize: theme.fonts.LARGE_SIZE,
    fontFamily: theme.fonts.JOST_BOOK
  }
};
