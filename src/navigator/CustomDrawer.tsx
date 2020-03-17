import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';
import ContentLoader from 'react-native-skeleton-content';
import useIsDrawerOpen from '../libs/useDrawerOpen';
import Animated from 'react-native-reanimated';

import { useThemeContext } from '../theme';
import { useStoreContext } from '../store';
import ResponsiveImage from '../libs/responsiveImage';
import applyScale from '../utils/applyScale';
import boxShadow from '../utils/boxShadows';
import FemaleAvatar from '../../assets/icons/female-avatar';
import { DrawerButtons } from '../../assets/icons/drawer-buttons';

import {
  DrawerContainer,
  StaticDrawerContainer,
  StaticDrawerCurve,
  ProfileContainer,
  AvatarContainer,
  ProfileName,
  ProfileNumber,
  ProfileDetailsContainer
} from './styles';

const IMAGE_SIZE = applyScale(80);

export default function CustomDrawer(props) {
  const { fonts, colors } = useThemeContext();
  const isDrawerOpen = useIsDrawerOpen();

  const {
    state: { userState }
  } = useStoreContext();

  const { user } = userState;

  const [animation, setAnimation] = useState({
    animateImage: new Animated.Value(0),
    hideContentLoader: true
  });

  const handleImageLoading = (error: any) => {
    if (!error) {
      setAnimation({ ...animation, hideContentLoader: false });
    }
  };

  const handleDrawer = () => {
    !isDrawerOpen
      ? props.navigation.openDrawer()
      : props.navigation.closeDrawer();
  };

  return (
    <DrawerContainer>
      <StaticDrawerContainer>
        <StaticDrawerCurve activeOpacity={1} onPress={handleDrawer}>
          <DrawerButtons
            buttonState={isDrawerOpen}
            fillColor={colors.BG_LIGHT_COLOR}
          />
        </StaticDrawerCurve>
      </StaticDrawerContainer>
      <ProfileContainer>
        <AvatarContainer
          style={[
            boxShadow({
              elevation: 2,
              shadowOpacity: 0.1,
              shadowRadius: 5,
              width: 0,
              height: 2
            })
          ]}
        >
          <ContentLoader
            isLoading={animation.hideContentLoader}
            containerStyle={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
            layout={[
              { width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 40 }
            ]}
          />

          {user.avatar ? (
            <ResponsiveImage
              imageUrl={user.avatar}
              width={80}
              height={80}
              style={{ borderRadius: 40 }}
              onLoad={handleImageLoading}
            />
          ) : (
            <TouchableWithoutFeedback onLayout={() => handleImageLoading(null)}>
              <FemaleAvatar
                width="70%"
                height="70%"
                style={{ position: 'absolute' }}
              />
            </TouchableWithoutFeedback>
          )}
        </AvatarContainer>
        <ProfileDetailsContainer>
          <ProfileName>{user.name}</ProfileName>
          <ProfileNumber>{user.phone}</ProfileNumber>
        </ProfileDetailsContainer>
      </ProfileContainer>
      <DrawerItemList {...props} />
    </DrawerContainer>
  );
}
