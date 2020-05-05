import styled from 'styled-components/native';
import applyScale from '../../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
`;

export const ScrollView = styled.ScrollView``;

export const Title = styled.Text`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: ${({ theme: { fonts } }) => fonts.JOST_BOOK};
  font-size: ${applyScale(30)}px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  margin-top: 18px;
  opacity: 0.4;
  font-size: ${applyScale(10)}px;
`;

export const Content = styled.Text`
    font-size:20px;
    width:70%;
    margin-bottom:35px;
    text-align:center;
    font-family:${({ theme }) => theme.fonts.CORMORANT_MEDIUM};
    opacity:0.7;
`;