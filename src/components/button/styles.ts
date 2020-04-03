import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_LIGHT_COLOR};
  text-transform: capitalize;
`;
