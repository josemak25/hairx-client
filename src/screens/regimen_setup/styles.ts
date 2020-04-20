import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
`;

export const CancelSetupButton = styled.TouchableOpacity`
  width: ${applyScale(35)}px;
  height: ${applyScale(35)}px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background-color: ${({ theme }) => theme.colors.BUTTON_DARK_COLOR};
  position: absolute;
  top: ${applyScale(50)}px;
  right: ${applyScale(20)}px;
`;

export const Welcome = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
`;
