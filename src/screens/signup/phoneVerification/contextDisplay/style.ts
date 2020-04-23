import styled from 'styled-components/native';
import { theme } from '../../../../theme/types';
import applyScale from '../../../../utils/applyScale';

export const Container = styled.View`
  width: 100%;
  padding: 0px 10px;
  height: ${applyScale(45)}px;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
`;

export const Text = styled.Text`
  opacity: 0.7;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  width: 50%;
  height: ${applyScale(18)}px;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
`;

export const ButtonStyle = {
  Mainbutton: {
    backgroundColor: theme.colors.INPUT_FIELD_COLOR,
    elevation: 0,
    shadowOpacity: 0,
    height: applyScale(18),
    width: '20%'
  },
  textStyle: {
    width: '100%',
    textAlign: 'right',
    height: applyScale(18),
    color: theme.colors.FONT_DARK_COLOR,
    fontSize: theme.fonts.LARGE_SIZE,
    fontFamily: theme.fonts.JOST_BOOK
  }
};
