import styled from 'styled-components/native';

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

export const BackButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;