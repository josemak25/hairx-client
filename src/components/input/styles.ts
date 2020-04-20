import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 70px;
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
  border-radius: 3px;
  padding: 0px 15px;
  border-radius: 5px;
  text-transform: capitalize;
`;

export const InputLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  align-self: flex-start;
  padding: 10px 0px;
`;
