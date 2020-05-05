import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  position:relative;
  height: ${applyScale(71)}px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_PINK_COLOR};
`;

export const Content = styled.View`
  width:70%;
  height: ${applyScale(71)}px;
  padding-left:10px;
  z-index:3;
`;

export const Time = styled.View`
    font-size:10px;
    font-family:${({ theme }) => theme.fonts.JOST_BOOK};
    color:${({ theme }) => theme.colors.FONT_RED_COLOR};
    opacity:0.8;
`;

export const Title = styled.View`
    font-size:15px;
    font-family:${({ theme }) => theme.fonts.JOST_BOOK};

`;

export const Purpose = styled.View`
    font-size:13px;
    font-family:${({ theme }) => theme.fonts.CORMORANT_REGULAR};
    opacity:0.7;
`;

export const Booking = styled.View`
    z-index:2;
    width:34%;
    height:${applyScale(50)}px;
    background-color:${({ theme }) => theme.colors.BG_LIGHT_YELLOW_COLOR};
`;

export const Book = styled.View`
    
`;
