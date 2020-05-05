import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: ${applyScale(71)}px;
  margin-bottom: 10px;
`;

export const Content = styled.View`
  width:70%;
  justify-content:center;
  height: ${applyScale(71)}px;
  padding-left:20px;
  border-radius:5px;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_BLUE_COLOR};
  z-index:3;
`;

export const Time = styled.Text`
    font-size:10px;
    font-family:${({ theme }) => theme.fonts.JOST_BOOK};
    color:${({ theme }) => theme.colors.BG_DARK_BLUE_COLOR};
    opacity:0.8;
`;

export const Title = styled.Text`
    font-size:15px;
    font-family:${({ theme }) => theme.fonts.JOST_BOOK};

`;

export const Purpose = styled.Text`
    font-size:13px;
    font-family:${({ theme }) => theme.fonts.CORMORANT_REGULAR};
    opacity:0.7;
`;

export const Booking = styled.TouchableOpacity`
    z-index:2;
    width:34%;
    position:relative;
    right:8px;
    height:${applyScale(50)}px;
    align-items:center;
    justify-content:center;
    border-radius:5px;
    background-color:${({ theme }) => theme.colors.BG_LIGHT_YELLOW_COLOR};
`;

export const Book = styled.Text`
    font-size:10px;
    font-family:${({ theme }) => theme.fonts.JOST_MEDIUM};
`;
