import styled from 'styled-components/native';
import applyScale from '../../../utils/applyScale';

export const HeaderSection = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 18px;
`;

export const Context = styled.View`
  flex: 1;
  height: 100%;
  padding: 15px 15px 0px 20px;
  align-self: flex-end;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.8;
  margin-top: 7px;
`;

export const ReadMore = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_ITALIC};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.8;
`;

export const ResponsiveImageContainer = styled.View`
  width: ${applyScale(100)}px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
