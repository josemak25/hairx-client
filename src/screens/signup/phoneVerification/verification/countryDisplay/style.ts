import styled from 'styled-components/native';
import { theme } from '../../../../../theme/types';

export const Container = styled.View`
  width: 100%;
  padding: 0px 10px;
  height: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  Mainbutton: {
    backgroundColor: theme.colors.INPUT_FIELD_COLOR,
    elevation: 0,
    height: 18,
    width: 'auto'
  },
  textStyle: {
    width: 63,
    height: 18,
    color: theme.colors.FONT_DARK_COLOR,
    fontSize: theme.fonts.LARGE_SIZE,
    fontFamily: theme.fonts.JOST_BOOK
  }
};
