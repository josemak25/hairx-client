import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { NavigationInterface } from '../../types';
import { useThemeContext } from '../../../theme';
import SafeAreaView from '../../../commons/safe-area-view';
import Header from '../../../commons/header';
import applyScale from '../../../utils/applyScale';
import boxShadow from '../../../utils/boxShadows';

import { Container, Cover, IconCover, BackgroundCover } from './styles';

const HEADER_EXPANDED_HEIGHT = 300;



interface RegimenRoutineScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenRoutineScreen(props: RegimenRoutineScreenProp) {
  const {
    navigation
  } = props;

  const { colors } = useThemeContext();

  return (
    <SafeAreaView>
      <Header
        headerLeft={() => (
          <IconCover onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-arrow-back"
              size={20}
              color={colors.BG_WHITE_COLOR}
            />
          </IconCover>
        )}
        headerLeftContainerStyle={{
          paddingLeft: 10,
          position: 'absolute',
          alignItems: 'flex-start',
          paddingTop: 10,
          zIndex: 999
        }}
        title={() => (
          <Cover>
            <BackgroundCover
              source={require('../../../../assets/images/Female_Hair_Rearview.png')}
            />
          </Cover>
        )}
        headerRightContainerStyle={{ display: 'none' }}
        style={[
          { height: applyScale(HEADER_EXPANDED_HEIGHT) },
          boxShadow({ elevation: 0, shadowColor: colors.BG_WHITE_COLOR })
        ]}
      />

     
    </SafeAreaView>
  );
}
