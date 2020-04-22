import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  padding: 20px;
`;

export const Welcome = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  margin: 20% 0 1%;
`;

export const Prompt = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 15}px;
  font-family: ${({ theme }) => theme.fonts.JOST_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  margin: 0 0 10%;
`;

export const Choice = styled.Text`
  text-align: center;
  margin: 4% 0;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
`;

export const IconView = styled.View`
  position: absolute;
  left: 20px;
`;

export const GoogleIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

export const Terms = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-align: center;
  position: relative;
  top: 70px;
`;

export const Service = styled.Text`
  text-decoration: underline;
`;

export const ButtonView = styled.View`
  margin-bottom: 6%;
`;

export const NavigationView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 2%;
`;

export const Pagination = styled.Text`
  margin-left: auto;
  margin-right: auto;
  font-family: ${({theme}) => theme.fonts.JOST_BOOK};
  font-size: ${({theme}) => theme.fonts.LARGE_SIZE};
`;

export const OfText = styled.Text`
font-family: ${({theme}) => theme.fonts.CORMORANT_REGULAR}
`;
