import React from 'react';
import RadioButton from 'react-native-simple-radio-button-input';
import { useThemeContext } from '../../../../theme';

import {
  CardView,
  Name,
  AvailableProducts,
  BrandView,
  ProductCover,
  RadioCover,
  BrandName,
  BrandIcon
} from './styles';
import ResponsiveImage from '../../../../libs/responsiveImage';

interface CardProductScreenProp {
  testID?: string;
  name: string;
  brand?: string;
  availableProducts?: string;
  value: string;
  selected: {};
  onPress: any;
  productIcon?: string;
}

export default function CardProduct(props: CardProductScreenProp) {
  const { colors } = useThemeContext();
  return (
    <CardView>
      <BrandView>
        <ResponsiveImage
          imageUrl={props.productIcon}
          width={60}
          height={60}
          resizeMode="contain"
        />
      </BrandView>
      <ProductCover>
        <Name>{props.name}</Name>
        <BrandName>{props.brand}</BrandName>
        <AvailableProducts>{props.availableProducts}</AvailableProducts>
      </ProductCover>
      <RadioCover>
        <RadioButton
          color={colors.INACTIVE_FIELD_COLOR}
          selected={props.selected}
          onPress={props.onPress}
          value={props.value}
        />
      </RadioCover>
    </CardView>
  );
}
