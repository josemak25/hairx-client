import React from 'react';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import getStartedData from '../../libs/get_started.json';

import SplashScreen from './splash';

interface GetStartedScreenProp extends NavigationInterface {
  testID?: string;
}

export default function GetStartedScreen(props: GetStartedScreenProp) {
  return (
    <SafeAreaView>
      <SplashScreen data={getStartedData[0]} navigation={props.navigation} />
    </SafeAreaView>
  );
}
