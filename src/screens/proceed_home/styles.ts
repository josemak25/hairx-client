import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 80%;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  padding-top: 30px;
`;

export const ContainerHeaderTexts = styled.View`
  align-items: center;
  padding: 0px 10px;
`;

export const AccentText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
`;

export const PrimaryText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE * 2.3}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
  text-align: center;
`;

export const Placeholder = styled.Image`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40%;
`;

export const HeaderTitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
`;

export const HeaderTitleLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  padding: 0px 5px;
`;
