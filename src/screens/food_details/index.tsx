import React, { useRef, useState } from 'react';
import { Dimensions, Text } from 'react-native';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import { useThemeContext } from '../../theme';
import {
  Container,
  FoodImage,
  FoodDetailContainer,
  FoodDetailHeader,
  FoodDetailBenefits,
  FoodDetailText,
  ProductsContainer,
  ProductBox,
  Product,
  ProductsHeader1,
  ProductsHeader2
} from './styles';
import Button from '../../components/button';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

interface FoodDetailsScreenProp extends NavigationInterface {
  testID?: string;
}

export default function FoodDetailsScreen(props: FoodDetailsScreenProp) {
  const { navigation } = props;

  const { colors } = useThemeContext();

  return (
    <SafeAreaView>
      <Container>
        <FoodImage
          source={require('../../../assets/images/chickpeas-in-a-bowl.png')}
        />
        <FoodDetailContainer>
          <FoodDetailHeader>Cheakpeas and lentils</FoodDetailHeader>
          <FoodDetailBenefits>Benefits</FoodDetailBenefits>
          <FoodDetailText>
            Chickpeas, Lentils, Nuts, seeds, Beans (great source of Protein)
            vegans must have omega-3 and B12 supplement. Include clean Protein
            like Hemp, Spirulina, pea Protein (add them into smoothies),
            Berries- Loaded with antioxidants (1 Cup of strawberries contain
            141% of your daily vitamin C needs)
          </FoodDetailText>
        </FoodDetailContainer>
        <ProductsContainer>
          <ProductBox>
            <ProductsHeader1>RECOMMENDED</ProductsHeader1>
            <ProductsHeader2>PRODUCTS</ProductsHeader2>
            <Product>This is the Product</Product>
          </ProductBox>
        </ProductsContainer>
      </Container>
    </SafeAreaView>
  );
}
