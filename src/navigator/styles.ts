import styled from 'styled-components/native';
import applyScale from '../utils/applyScale';

export const CartContainer = styled.View`
  width: ${applyScale(27)}px;
  justify-content: center;
  align-items: center;
`;

export const CartNotification = styled.View`
  width: ${applyScale(5)}px;
  height: ${applyScale(5)}px;
  border-radius: ${5 / 2}px;
  background-color: ${({ theme }) => theme.colors.ACTION_FONT_COLOR};
  position: absolute;
  top: 1px;
  left: 1px;
`;

export const TabBarLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE - 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  text-transform: capitalize;
`;

export const DrawerContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const StaticDrawerContainer = styled.View`
  width: ${applyScale(10)}px;
  height: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.DRAWER_COLOR};
  position: absolute;
  right: -8px;
  z-index: 1;
`;

export const StaticDrawerCurve = styled.TouchableOpacity`
  width: ${applyScale(120)}px;
  height: ${applyScale(120)}px;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.DRAWER_COLOR};
  position: absolute;
  top: 80px;
  right: -25px;
  border-radius: 100px;
  z-index: -1;
  padding-right: 5px;
`;

export const ProfileContainer = styled.View`
  height: ${applyScale(200)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 30px;
  z-index: 2;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.2);
`;

export const AvatarContainer = styled.View`
  width: ${applyScale(80)}px;
  height: ${applyScale(80)}px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin: 0px 10px;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
`;

export const ProfileName = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  width: ${applyScale(200)}px;
  text-transform: capitalize;
`;

export const ProfileNumber = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  opacity: 0.6;
  text-transform: capitalize;
  text-align: left;
`;

export const ProfileDetailsContainer = styled.View`
  height: ${applyScale(80)}px;
  justify-content: center;
  margin: 0px 10px;
`;
