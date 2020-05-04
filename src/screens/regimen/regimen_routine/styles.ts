import styled from 'styled-components/native';
import Constants from 'expo-constants';

import applyScale from '../../../utils/applyScale';

export const SplashTopStatusBar = styled.View`
  width: 100%;
  height: ${Constants.statusBarHeight}px;
  position: absolute;
  top: 0;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  padding-bottom: 20px
`;

export const Cover = styled.View`
  flex: 1;
  height: 100%;
`;

export const IconCover = styled.TouchableOpacity`
  width: ${applyScale(35)}px;
  height: ${applyScale(35)}px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.BG_BLUE_GREEN_COLOR};
`;

export const BackgroundCover = styled.Image`
  flex: 1;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 0
`;

export const TimeCover = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 4% 0 2%;
`;

export const Night = styled.Text`
  color: ${({ theme }) => theme.colors.FONT_BLUE_COLOR};
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE};
  margin-left: 1%;
  text-transform: uppercase;
`;

export const TitleText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 3%;
`;

export const Description = styled.Text`
  text-align: center;
  width: 65%;
  font-family: ${({ theme }) => theme.fonts.CORMORANT_MEDIUM};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE};
  color: rgba(0, 0, 0, 0.8);
`;

export const DescriptionCover = styled.View`
  align-items: center;
`;

export const Recommendation = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 2}px;
  color: rgba(0, 0, 0, 0.3);
  margin: 8% 0 1%;
  text-transform: uppercase;
`;

export const Products = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 5}px;
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE};
  color: rgba(0, 0, 0, 0.7);
`;

export const PriceSub = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE - 2}px;
  color: rgba(0, 0, 0, 0.7);
`;

export const PriceCover = styled.View`
  flex-direction: row;
  padding-top: 10px;
`;

export const ProductImage = styled.Image`
  margin: 8% 0;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE};
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: 0 10px;
`;
