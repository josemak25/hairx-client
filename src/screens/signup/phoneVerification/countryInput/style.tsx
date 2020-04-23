import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: 15px;
  opacity: 0.7;
`;

export const PhoneInputField = styled.TextInput`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  height: ${applyScale(43)}px;
  padding-left: ${applyScale(60)}px;
  border-radius: 5px;
  margin-top: ${applyScale(10)}px;
  margin-bottom: 40px;
`;

export const CountryDailingCode = styled.Text`
  position: absolute;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  text-align: right;
  width: 10%;
  top: ${applyScale(114)}px;
  left: ${applyScale(10)}px;
`;
