import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  border: 1px solid red;
  width: ${WIDTH}px;
`;

export const Info = styled.Text``;

export const Text = styled.Text``;
