import styled from 'styled-components/native';
import { theme } from '../../../../theme/types';

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const Info = styled.Text``;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: 15px;
  opacity: 0.7;
  text-align: left;
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-align: center;
  font-size: 13px;
  width: 327px;
  height: 18px;
  margin-bottom: 20px;
`;

export const PhoneInputField = styled.TextInput`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  height: 45px;
  padding-left: 59px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const CountryDailingCode = styled.Text`
  position: absolute;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  text-align: right;
  width: 45px;
  top: 116px;
  left: 10px;
`;
