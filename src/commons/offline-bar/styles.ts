import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.BUTTON_DARK_GRAY_COLOR};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  text-align: center;
  padding: 10px;
`;
