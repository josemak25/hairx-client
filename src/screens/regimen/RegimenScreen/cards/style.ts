import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';

export const CardContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction:row;
  height: ${applyScale(118)}px;
  border-radius: 5px;
  margin-bottom:15px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_BLUE_COLOR};
`;

export const Context = styled.View`
  width:252px;
  justify-content:center;
  margin-left:19px;
  height:${applyScale(118)}px;
`;

export const Image = styled.Image`
  width:93px;
  height:${applyScale(118)}px;
`;

export const Time = styled.View`
  width:58px;
  height:${applyScale(14)}px;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;

export const Text = styled.Text`
  width:43px;
  font-size:${applyScale(10)}px;
  font-family:${({ theme }) => theme.fonts.JOST_BOOK};
`;

export const Heading = styled.Text`
  width:192px;
  margin-bottom:10px;
  font-size:${applyScale(15)}px;
  font-family:${({ theme }) => theme.fonts.JOST_BOOK}

`;

export const Content = styled.Text`
  width:209px;
  font-size:${applyScale(13)}px;
  font-family:${({ theme }) => theme.fonts.CORMORANT_REGULAR}
`;
