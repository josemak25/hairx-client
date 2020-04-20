import styled from 'styled-components/native';
import applyScale from '../utils/applyScale';

export const IconContainer = styled.View`
  flex: 1;
  width: ${applyScale(100)}px;
  height: ${applyScale(100)}px;
  justify-content: center;
  align-items: center;
`;
