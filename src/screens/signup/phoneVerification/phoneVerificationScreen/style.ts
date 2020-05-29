import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';
import { theme } from '../../../../theme/types';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 15px;
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

export const HeaderTitleOf = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  padding: 0px 5px;
`;

export const HeaderTitleNumber = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
`;

export const CancelSetupButton = styled.TouchableOpacity`
  width: ${applyScale(25)}px;
  height: ${applyScale(25)}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonStyle = {
  mainButton: { width: '100%', height: 60 },
  textStyle: {
    fontFamily: theme.fonts.JOST_MEDIUM,
    fontSize: theme.fonts.LARGE_SIZE,
    textTransform: 'none'
  }
};

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  font-size: 30px;
  margin-top: 50px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_MEDIUM};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  width: 80%;
  opacity: 0.7;
`;
