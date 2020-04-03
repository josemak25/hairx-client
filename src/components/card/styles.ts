import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
`;
