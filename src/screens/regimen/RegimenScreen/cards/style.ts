import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const CardContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: ${applyScale(118)}px;
  border-radius: 5px;
  margin-bottom: 15px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_BLUE_COLOR};
`;

export const Context = styled.View`
  width:  ${applyScale(252)}px;;
  justify-content: center;
  margin-left: 19px;
  height: ${applyScale(118)}px;
`;

export const ResponsiveImage = styled.View`
  width: ${applyScale(93)}px;
  height: ${applyScale(118)}px;
`;

export const Time = styled.View`
  width:  ${applyScale(60)}px;;
  height: ${applyScale(14)}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.Text`
  width:  ${applyScale(43)}px;;
  color: ${({ theme: { colors } }) => colors.BG_DARK_BLUE_COLOR};
  margin-left: 5px;
  font-size: ${applyScale(10)}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
`;

export const Heading = styled.Text`
  width:  ${applyScale(192)}px;;
  margin-bottom: 10px;
  font-size: ${applyScale(15)}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
`;

export const Content = styled.Text`
  width:  ${applyScale(209)}px;;
  font-size: ${applyScale(13)}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
`;
