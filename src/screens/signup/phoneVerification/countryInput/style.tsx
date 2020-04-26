import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';
import { Platform } from 'react-native';

export const Container = styled.View`
  width: 100%;
  margin: 40px 0px;
`;

export const DailingCode = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  padding-left: 15px;
  position: absolute;
  bottom: ${Platform.select({
    ios: applyScale(19),
    android: applyScale(25.5)
  })}px;
  z-index: 1;
`;

export const PhoneNumberContainer = styled.View`
  width: 100%;
  height: 100px;
  margin-bottom: 3%;
`;
