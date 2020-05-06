import React from 'react';
import { Foundation } from '@expo/vector-icons';
import { NavigationInterface } from '../../types';
import { useThemeContext } from '../../../theme';
import ResponsiveImage from '../../../libs/responsiveImage';
import applyScale from '../../../utils/applyScale';
import getResponsiveImageProps from '../../../utils/getResponsiveImageProps';
import Card from '../../../components/card';

import {
  Context,
  Time,
  ResponsiveImageContainer,
  Text,
  Heading,
  Content
} from './style';

const ROUTINE_IMAGE = getResponsiveImageProps();

interface CardProps extends NavigationInterface {
  time: string;
  order: 'row' | 'row-reverse';
  image: string;
  description: string;
  title: string;
  afterTreatmentImage: string;
  products: {
    price: string;
    image: string;
    name: string;
  }[];
}

export default function RoutineCard(props: CardProps) {
  const { fonts, colors } = useThemeContext();

  const { image, time, title, description, order, navigation } = props;

  return (
    <Card
      style={{
        width: '100%',
        height: applyScale(120),
        flexDirection: order,
        justifyContent: null,
        borderRadius: 5,
        marginBottom: 15,
        overflow: 'hidden',
        backgroundColor: colors.BG_LIGHT_BLUE_COLOR
      }}
      onPress={() =>
        navigation.navigate('RoutineDetailScreen', {
          title,
          description,
          afterTreatmentImage: props.afterTreatmentImage,
          products: props.products
        })
      }
    >
      <ResponsiveImageContainer>
        <ResponsiveImage
          imageUrl={image}
          height={applyScale(ROUTINE_IMAGE.imageHeight)}
          width={applyScale(ROUTINE_IMAGE.imageWidth)}
        />
      </ResponsiveImageContainer>

      <Context>
        <Time>
          <Foundation
            name="clock"
            size={15}
            color={colors.BG_DARK_BLUE_COLOR}
          />
          <Text>{time}</Text>
        </Time>

        <Heading>{title}</Heading>
        <Content numberOfLines={2}>
          {description.length > 65
            ? `${description.substring(0, 65)}...`
            : description}
          <Content style={{ fontFamily: fonts.CORMORANT_ITALIC }}>
            see more
          </Content>
        </Content>
      </Context>
    </Card>
  );
}
