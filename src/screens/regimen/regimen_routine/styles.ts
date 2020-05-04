import styled from 'styled-components/native';

import applyScale from '../../../utils/applyScale';

export const Container = styled.View``;

export const Cover = styled.View`
    flex: 1;
    height: 100%
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
    width: 100%
`;
