import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin: 0px 15px;
`;

export const Header = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  width: 311px;
  font-size: 30px;
  text-align: left;
  height: 43px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  text-align: left;
  width: 327px;
  height: 53px;
`;
