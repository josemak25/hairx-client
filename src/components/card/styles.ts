import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  min-width: 30px;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
`;
