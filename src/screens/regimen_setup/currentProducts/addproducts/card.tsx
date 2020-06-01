import React from 'react';
import RadioButton from 'react-native-simple-radio-button-input';
import { useThemeContext } from '../../../../theme';
import applyScale from '../../../../utils/applyScale';
import ResponsiveImage from '../../../../libs/responsiveImage';

import {
  CardView,
  Name,
  AvailableProducts,
  BrandView,
  ProductCover,
  RadioCover,
  BrandName
} from './styles';

interface CardProductScreenProp {
  testID?: string;
  name: string;
  brand?: string;
  availableProducts?: string;
  value: string;
  selected: {};
  onPress: any;
  brandIcon?: string;
  productIcon?: string;
}

export default function CardProduct(props: CardProductScreenProp) {
  const { colors } = useThemeContext();
  return (
    <CardView>
      {props.productIcon ? (
        <BrandView>
          <ResponsiveImage
            imageUrl={props.productIcon}
            width={applyScale(40)}
          />
        </BrandView>
      ) : (
        <ResponsiveImage imageUrl={props.brandIcon} width={applyScale(58)} />
      )}
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
