import React, { useState } from 'react';
import { Animated, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import SafeAreaView from '../../commons/safe-area-view';
import Products from './products';
import Assessments from './assessments';
import Recommendations from './recommendations';
import Header from '../../commons/header';
import applyScale from '../../utils/applyScale';
import ResponsiveImage from '../../libs/responsiveImage';
import boxShadow from '../../utils/boxShadows';

import {
  BackButton,
  ContentArea,
  HairCareSaloonCard,
  CardInfo,
  CardLabel,
  CardValue
} from './styles';

const HEADER_IMAGE_WIDTH = Math.floor(
  Dimensions.get('screen').width <= 375
    ? Dimensions.get('screen').width / 2 + 30
    : Dimensions.get('screen').width / 2 + 10
);

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;

type AppointmentType = {
  appointmentDate: string;
  beforeAppointmentImage: string;
  afterAppointmentImage: string;
  appointmentIssue: string;
  assessments: { label: string; value: string; degree: string }[];
  products: { description: string; benefits: string; image: string }[];
  recommendations: { text: string; frequency: string }[];
};

interface HairCareScreenScreenProp extends NavigationInterface {
  testID?: string;
  route: { params: AppointmentType };
}

export default function HairCareDetailScreen(props: HairCareScreenScreenProp) {
  const {
    navigation,
    route: { params }
  } = props;

  const { colors } = useThemeContext();

  const [state] = useState({
    beforeAnimation: new Animated.Value(1),
    afterAnimation: new Animated.Value(1)
  });

  return (
    <SafeAreaView>
      <Header
        headerLeft={() => (
          <BackButton onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-arrow-back"
              size={20}
              color={colors.BG_WHITE_COLOR}
            />
          </BackButton>
        )}
        headerLeftContainerStyle={{
          justifyContent: 'flex-start',
          paddingLeft: 10,
          position: 'absolute',
          alignItems: 'flex-start',
          paddingTop: 10,
          zIndex: 999
        }}
        title={() => (
          <ContentArea>
            <ResponsiveImage
              width={HEADER_IMAGE_WIDTH}
              height={HEADER_EXPANDED_HEIGHT}
              imageUrl={params.beforeAppointmentImage}
              style={{ alignSelf: 'flex-start' }}
            />

            <ResponsiveImage
              width={HEADER_IMAGE_WIDTH}
              height={HEADER_EXPANDED_HEIGHT}
              imageUrl={params.afterAppointmentImage}
              style={{ alignSelf: 'flex-end' }}
            />
            <HairCareSaloonCard>
              <CardInfo>
                <CardLabel>goal</CardLabel>
                <CardValue>Hair Growth</CardValue>
              </CardInfo>
              <CardInfo>
                <CardLabel>date</CardLabel>
                <CardValue>{params.appointmentDate.substr(0, 7)}</CardValue>
              </CardInfo>
              <CardInfo>
                <CardLabel>Salon</CardLabel>
                <CardValue>JHB Studio</CardValue>
              </CardInfo>
            </HairCareSaloonCard>
          </ContentArea>
        )}
        headerRightContainerStyle={{ display: 'none' }}
        style={[
          { height: applyScale(HEADER_EXPANDED_HEIGHT) },
          boxShadow({ elevation: 0, shadowColor: colors.BG_WHITE_COLOR })
        ]}
      />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 50,
          paddingBottom: 30
        }}
        showsVerticalScrollIndicator={false}
      >
        <ContentArea>
          <Assessments assessments={params.assessments} />
          <Products products={params.products} />
          <Recommendations recommendations={params.recommendations} />
        </ContentArea>
      </ScrollView>
    </SafeAreaView>
  );
}
