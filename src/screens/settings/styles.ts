import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
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

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

export const AboutText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.INACTIVE_FIELD_COLOR};
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.BUTTON_DARK_COLOR};
  padding: 0px 20px;
  line-height: 30px;
`;

export const OptionsContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

export const SettingsItem = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  background-color: ${({ theme }) => theme.colors.BUTTON_LIGHT_COLOR};
  padding: 0px 16px;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: center;
`;

export const SettingsText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
`;
