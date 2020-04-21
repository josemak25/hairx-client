import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { theme } from '../../../theme/types';

const { width } = Dimensions.get('window');
const WIDTH = width - 30;

export const Container = styled.View`
  flex: 1;
  width: ${width}px;
  padding: 15px;
`;

export const ButtonStyle = {
  mainButton: {
    width: '100%'
  },
  textStyle: {
    fontFamily: theme.fonts.JOST_MEDIUM,
    fontSize: 15
  }
};

export const Header = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  width: 311px;
  font-size: 30px;
  text-align: left;
  height: 43px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_MEDIUM};
  text-align: left;
  width: 327px;
  opacity: 0.7;
  height: 53px;
`;
