import React from 'react';
import Card from '../../components/card';
import { NavigationInterface } from '../types';
import ResponsiveImage from '../../libs/responsiveImage';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';

import {
  Cover,
  CardLabel,
  CardLabelContainer,
  CardText,
  DateText
} from './styles';

interface SaloonCardProp extends NavigationInterface {
  testID?: string;
  appointmentDate: string;
  beforeAppointmentImage: string;
  afterAppointmentImage: string;
  appointmentIssue: string;
  assessments: { label: string; value: string; degree: string }[];
  products: { description: string; benefits: string; image: string }[];
  recommendations: { text: string; frequency: string }[];
}

export default function SaloonCard(props: SaloonCardProp) {
  const { colors, fonts } = useThemeContext();
  const {
    state: { grid }
  } = useStoreContext();

  const {
    appointmentDate,
    appointmentIssue,
    beforeAppointmentImage,
    afterAppointmentImage,
    navigation
  } = props;

  const handleNavigate = () => {
    navigation.navigate('HairCareDetailScreen', {
      appointmentDate,
      appointmentIssue,
      beforeAppointmentImage: props.beforeAppointmentImage,
      afterAppointmentImage: props.afterAppointmentImage,
      assessments: props.assessments,
      products: props.products,
      recommendations: props.recommendations
    });
  };

  return (
    <Card
      onPress={handleNavigate}
      style={{
        flex: 1,
        height: 184,
        borderRadius: 5,
        justifyContent: 'flex-start',
        backgroundColor: colors.BG_LIGHT_GOLD_COLOR,
        margin: 6
      }}
      activeOpacity={0.3}
    >
      <Cover>
        <ResponsiveImage
          width={grid.cardSize / 2}
          height={123}
          imageUrl={beforeAppointmentImage}
          style={{
            alignSelf: 'flex-start',
            borderRadius: 5,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          }}
        />
        <ResponsiveImage
          width={grid.cardSize / 2 - 10}
          height={123}
          imageUrl={afterAppointmentImage}
          style={{
            alignSelf: 'flex-end',
            borderRadius: 5,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }}
        />
      </Cover>
      <DateText>{appointmentDate}</DateText>
      <CardLabelContainer>
        <CardLabel
          style={{
            opacity: 0.7,
            textTransform: 'capitalize',
            fontFamily: fonts.CORMORANT_REGULAR,
            fontSize: fonts.LARGE_SIZE
          }}
        >
          issue:
        </CardLabel>
        <CardText>{appointmentIssue}</CardText>
      </CardLabelContainer>
    </Card>
  );
}
