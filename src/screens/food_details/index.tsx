import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { NavigationInterface } from '../types';
import SafeAreaView from '../../commons/header/safe-area-view';
import { useThemeContext } from '../../theme';
import { products } from '../../libs/food_details_screen_products.json';
import {
  Container,
  FoodImage,
  FoodDetailContainer,
  FoodDetailHeader,
  FoodDetailBenefits,
  FoodDetailText,
  ProductsContainer,
  ProductBox,
  ProductPrice,
  ProductsHeader1,
  ProductsHeader2,
  ProductImage,
  ProductHeaders,
  ProductText
} from './styles';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

interface FoodDetailsScreenProp extends NavigationInterface {
  testID?: string;
}

export default function FoodDetailsScreen(props: FoodDetailsScreenProp) {
  const { navigation } = props;

  const { colors } = useThemeContext();

  return (
    <SafeAreaView>
      <ScrollView>
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
            <ProductHeaders>
              <ProductsHeader1>RECOMMENDED</ProductsHeader1>
              <ProductsHeader2>PRODUCTS</ProductsHeader2>
            </ProductHeaders>
            <ScrollView horizontal style={{ paddingLeft: 30 }}>
              {products.map(product => (
                <ProductBox key={product.name}>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductImage
                    resizeMode="contain"
                    source={require('../../../assets/images/food_details_product_2.png')}
                  />
                  <ProductText>{product.name}</ProductText>
                </ProductBox>
              ))}
            </ScrollView>
          </ProductsContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
