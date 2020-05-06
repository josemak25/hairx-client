import styled from 'styled-components/native';
import applyScale from '../../../utils/applyScale';

export const Context = styled.View`
  flex: 1;
  height: 100%;
  padding: 15px 15px 0px 20px;
  align-self: flex-end;
`;

export const ResponsiveImageContainer = styled.View`
  width: ${applyScale(100)}px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({ theme: { colors } }) => colors.BG_DARK_BLUE_COLOR};
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-transform: uppercase;
  padding: 0px 5px;
`;

export const Heading = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  padding: 5px 0px;
`;

export const Content = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 1}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
`;

export const HeaderSection = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 18px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE * 2}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  margin-top: 7px;
  align-self: center;
`;
