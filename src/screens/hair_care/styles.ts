import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const BackButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BACK_BUTTON_BG_COLOR};
  width: 28px;
  height: 28px;
  border-radius: 14px;
  position: absolute;
  top: 40px;
  left: 5px;
`;

export const Cover = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  height: 350px;
  border-radius: 5px;
`;

export const CoverPart = styled.Image`
  flex: 1;
  height: 100%;
`;

export const ContentArea = styled.View`
  flex: 1;
`;

export const View = styled.View`
  flex: 1;
`;

export const HairCareSaloonCard = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_GOLD_COLOR};
  width: 80%;
  height: 65px;
  margin-top: -15px;
  border-radius: 5px;
`;

export const CardInfo = styled.View`
  flex: 1;
  justify-content: center;
`;

export const CardLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.3;
  text-align: center;
  text-transform: uppercase;
`;

export const CardValue = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
`;
