import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  min-width: 200px;
  min-height: 200px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
`;
