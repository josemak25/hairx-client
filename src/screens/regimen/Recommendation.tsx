import React, { useRef, useState, useEffect } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';

import { NavigationInterface } from '../types';
import applyScale from '../../utils/applyScale';
import { useThemeContext } from '../../theme';
import FoodScreen from './food/food';
import RoutineScreen from './routine';

import {
  HeaderTab,
  HeaderTitleLabel,
  HeaderTitleContainer,
  HeaderTitle
} from './styles';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';

interface RecommendationScreenProp extends NavigationInterface {
  testID?: string;
  children: React.ReactChild;
}

export default function RecommendationScreen(props: RecommendationScreenProp) {
  const { colors } = useThemeContext();
  const [state, setState] = useState({ ref: null, isFirstRender: true });

  const { navigation } = props;

  const headerTabRef = useRef({
    routineRef: null,
    foodRef: null,
    saloonVisitsRef: null
  });

  const { routineRef, foodRef, saloonVisitsRef } = headerTabRef.current;

  useEffect(() => {
    //select this routeRef if its the first render
    setState({ ...state, ref: routineRef, isFirstRender: false });
  }, [routineRef]);

  const handleDecoration = (ref: any) => {
    if (!ref) return;
    //First set existing textDecorationLine to none
    Object.keys(headerTabRef.current).forEach(key => {
      if (headerTabRef.current[key]) {
        headerTabRef.current[key].setNativeProps({
          style: {
            textDecorationLine: 'none',
            opacity: 0.5
          }
        });
      }
    });
    //Now set textDecorationLine = underline for this ref
    ref.setNativeProps({
      style: {
        textDecorationLine: 'underline',
        opacity: 1
      }
    });
  };

  const MountSelectedScreen = () => {
    switch (state.ref) {
      case routineRef:
        handleDecoration(state.ref);
        return <RoutineScreen navigation={navigation} />;
      case foodRef:
        handleDecoration(state.ref);
        return <FoodScreen navigation={navigation} />;
      case saloonVisitsRef:
        handleDecoration(state.ref);
        return <FoodScreen navigation={navigation} />;
      default:
        return <RoutineScreen navigation={navigation} />;
    }
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.BG_WHITE_COLOR}
      />
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>hairx</HeaderTitle>
            <HeaderTitleLabel>regimen</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
      />
      <HeaderTab>
        <TouchableOpacity
          onPress={() => {
            setState({ ...state, ref: routineRef });
          }}
        >
          <HeaderTitleLabel
            ref={ref => {
              headerTabRef.current.routineRef = ref;
              if (state.isFirstRender)
                handleDecoration(headerTabRef.current.routineRef);
            }}
            style={{ opacity: 0.5 }}
          >
            routine
          </HeaderTitleLabel>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setState({ ...state, ref: foodRef });
          }}
        >
          <HeaderTitleLabel
            style={{
              marginLeft: applyScale(30),
              marginRight: applyScale(30),
              opacity: 0.5
            }}
            ref={ref => {
              headerTabRef.current.foodRef = ref;
            }}
          >
            foods
          </HeaderTitleLabel>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setState({ ...state, ref: saloonVisitsRef });
          }}
        >
          <HeaderTitleLabel
            ref={ref => {
              headerTabRef.current.saloonVisitsRef = ref;
            }}
            style={{ opacity: 0.5 }}
          >
            saloon visits
          </HeaderTitleLabel>
        </TouchableOpacity>
      </HeaderTab>
      <MountSelectedScreen />
    </SafeAreaView>
  );
}
