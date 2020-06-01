import React from 'react';
import RadioButton from 'react-native-simple-radio-button-input';
import { useThemeContext } from '../../../../theme';

import {
  CardView,
  BrandIcon,
  Name,
  AvailableProducts,
  BrandView,
  ProductCover,
  RadioCover,
  BrandName,
  ProductIcon
} from './styles';

interface CardProductScreenProp {
  testID?: string;
  name: string;
  brand?: string;
  availableProducts?: string;
  value: string;
  selected: {};
  onPress: any;
  brandIcon?: any;
  productIcon?: any;
}

export default function CardProduct(props: CardProductScreenProp) {
  const { colors } = useThemeContext();
  return (
    <CardView>
      {props.productIcon ? (
        <BrandView>
          <ProductIcon source={props.productIcon} />
        </BrandView>
      ) : (
        <BrandIcon source={props.brandIcon} />
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
