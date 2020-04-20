import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const Logo = styled.Image`
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`;
