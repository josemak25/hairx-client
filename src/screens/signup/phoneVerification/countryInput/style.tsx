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
  width: 80%;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  height: ${applyScale(45)}px;
  padding-left: ${applyScale(10)}px;
`;

export const CountryDailingCode = styled.View`
  background: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  margin-bottom: ${applyScale(40)}px;
  height: ${applyScale(45)}px;
`;
