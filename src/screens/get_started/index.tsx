import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import { useThemeContext } from '../../theme';
import Slide from './slide';
import { slides } from '../../libs/get_started.json';
import applyScale from '../../utils/applyScale';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

import { SplashTopStatusBar } from './styles';

export type SlideItem = {
  key: string;
  title: string;
  text: string;
  backgroundColor: string;
};

interface GetStartedScreenProp extends NavigationInterface {
  testID?: string;
}

export default function GetStartedScreen(props: GetStartedScreenProp) {
  const { navigation } = props;

  const { colors } = useThemeContext();
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef<{ goToSlide(index: number): void }>(null);

  const handleNextButton = () => {
    const nextScrollIndex = currentSlide + 1;
    sliderRef.current.goToSlide(nextScrollIndex);
    handleSlideChange(nextScrollIndex);
  };

  const handleSkipButton = () => {
    const nextScrollIndex = 2;
    sliderRef.current.goToSlide(nextScrollIndex);
    handleSlideChange(nextScrollIndex);
  };

  const handleDoneButton = () => navigation.replace('SigninScreen');

  const handleSlideChange = (index: number) => setCurrentSlide(index);

  return (
    <SafeAreaView>
      <SplashTopStatusBar
        style={{ backgroundColor: slides[currentSlide].backgroundColor }}
      />
      <AppIntroSlider
        testID="slider"
        renderItem={({ item }) => (
          <Slide
            key={item.key}
            {...item}
            handleNext={handleNextButton}
            handleDone={handleDoneButton}
            handleSkip={handleSkipButton}
          />
        )}
        onSlideChange={handleSlideChange}
        activeDotStyle={{
          backgroundColor: colors.BG_WHITE_COLOR,
          width: 9,
          height: 9
        }}
        dotStyle={{
          backgroundColor: colors.INACTIVE_FIELD_COLOR,
          width: 7,
          height: 7
        }}
        paginationStyle={{
          height: 50,
          top: applyScale(SCREEN_HEIGHT / 2 - 100)
        }}
        renderDoneButton={() => null}
        renderNextButton={() => null}
        slides={slides}
        ref={sliderRef}
      />
    </SafeAreaView>
  );
}
