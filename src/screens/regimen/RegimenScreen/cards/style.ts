import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';

export const CardContainer = styled.TouchableOpacity`
  flex:1;
  height:${applyScale(118)}px;
  border-radius:5px;
  background-color:${({theme})=>theme.colors.BG_LIGHT_BLUE_COLOR}
`;

export const Context = styled.View``

export const Time = styled.View``

export const Heading = styled.Text``

export const Content = styled.Text`` 