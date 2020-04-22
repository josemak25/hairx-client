import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  padding: 20px;
`;

export const Welcome = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  margin: 25% 0 1%;
`;

export const Prompt = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 15}px;
  font-family: ${({ theme }) => theme.fonts.JOST_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  margin: 0 0 15%;
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
  margin-top: 40%;
  padding-bottom: 10%
`;

export const Service = styled.Text`
  text-decoration: underline;
`;
