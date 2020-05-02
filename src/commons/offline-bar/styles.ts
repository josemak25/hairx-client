import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.BUTTON_DARK_GRAY_COLOR};
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.JOST_MEDIUM};
  color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  padding: 10px;
`;
