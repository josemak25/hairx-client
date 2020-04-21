import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  border: 1px solid red;
  width: 100%;
`;

export const Info = styled.Text``;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: 15px;
  opacity: 0.7;
  text-align: left;
`;
