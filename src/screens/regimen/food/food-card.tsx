import React from 'react';
import { NavigationInterface } from '../../types';
import ResponsiveImage from '../../../libs/responsiveImage';
import { useThemeContext } from '../../../theme';
import Card from '../../../components/card';
import applyScale from '../../../utils/applyScale';
import getResponsiveImageProps from '../../../utils/getResponsiveImageProps';

import { SubHeaderTitle } from '../styles';
import {
  Context,
  Title,
  Description,
  ReadMore,
  ResponsiveImageContainer
} from './styles';

const ROUTINE_IMAGE = getResponsiveImageProps();

interface FoodCardProp extends NavigationInterface {
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

export default function FoodCard(props: FoodCardProp) {
  const { colors, fonts } = useThemeContext();

  const { image, title, description, order, navigation } = props;

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
        backgroundColor: colors.BG_LIGHT_LEMON_COLOR
      }}
      onPress={() =>
        navigation.navigate('FoodDetailScreen', {
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
        <Title>{title}</Title>
        <SubHeaderTitle
          style={{
            fontSize: fonts.SMALL_SIZE,
            color: colors.BG_DARK_BLUE_COLOR
          }}
        >
          benefits
        </SubHeaderTitle>
        <Description numberOfLines={2}>
          {description.length > 65
            ? `${description.substring(0, 65)}...`
            : description}
          <ReadMore>read more...</ReadMore>
        </Description>
      </Context>
    </Card>
  );
}
