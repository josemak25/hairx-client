import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  width: ${WIDTH}px;
`;

export const Header = styled.Text``;

export const Navinfo = styled.View``;
