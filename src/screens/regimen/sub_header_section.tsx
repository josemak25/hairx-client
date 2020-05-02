import React, { useRef } from 'react';
import { NavigationInterface } from '../types';
import { TouchableOpacity } from 'react-native';
import { HeaderTab, HeaderTitleLabel } from './styles';
import applyScale from '../../utils/applyScale';

interface SubHeaderSectionProp extends NavigationInterface {
  testID?: string;
}

export default function SubHeaderSection(props: SubHeaderSectionProp) {
  /**
   * IDEALLY, THESE Refs WILL BE SAVED IN THE STORE WHEN WE START THE LOGIC STAGE OF THIS PROJECT
   */
  const headerTabRef = useRef({
    routineRef: null,
    foodRef: null,
    saloonVisitsRef: null
  });

  const handleClick = (ref: any, routePath: string) => {
    //First set existing textDecorationLine to none
    Object.keys(headerTabRef.current).forEach(key =>
      headerTabRef.current[key].setNativeProps({
        style: {
          textDecorationLine: 'none',
          opacity: 0.5
        }
      })
    );

    //Now set textDecorationLine to underline for this ref
    ref.setNativeProps({
      style: {
        textDecorationLine: 'underline',
        opacity: 1
      }
    });
    props.navigation.navigate(routePath);
  };

  return (
    <HeaderTab>
      <TouchableOpacity
        onPress={() => {
          handleClick(headerTabRef.current.routineRef, 'RoutineScreen');
        }}
      >
        <HeaderTitleLabel
          ref={ref => {
            headerTabRef.current.routineRef = ref;
          }}
          style={{ opacity: 0.5 }}
        >
          routine
        </HeaderTitleLabel>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleClick(headerTabRef.current.foodRef, 'FoodScreen');
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
          handleClick(headerTabRef.current.saloonVisitsRef, 'SaloonVisits');
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
  );
}
