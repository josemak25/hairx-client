import React from 'react';
import { ScrollView, Dimensions, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationInterface } from '../../../types';
import { useThemeContext } from '../../../../theme';
import applyScale from '../../../../utils/applyScale';
import { products } from '../../../../libs/food_details_screen_products.json';
import ResponsiveImage from '../../../../libs/responsiveImage';
import boxShadow from '../../../../utils/boxShadows';
import Header from '../../../../commons/header';
import SafeAreaView from '../../../../commons/safe-area-view';
import {
  Container,
  BackButton,
  FoodDetailContainer,
  FoodDetailHeader,
  FoodDetailBenefits,
  FoodDetailText,
  ProductsContainer,
  ProductBox,
  ProductPrice,
  ContentArea,
  ProductsHeader1,
  ProductsHeader2,
  ProductImage,
  ProductHeaders,
  ProductText
} from './styles';

const HEADER_EXPANDED_HEIGHT = 300;

interface FoodDetailsScreenProp extends NavigationInterface {
  testID?: string;
}

export default function FoodDetailsScreen(props: FoodDetailsScreenProp) {
  const { navigation } = props;

  const { colors } = useThemeContext();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" translucent />
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
              width={Dimensions.get('screen').width + 40}
              height={HEADER_EXPANDED_HEIGHT}
              imageUrl="https://lh3.googleusercontent.com/proxy/MV7mEwwbQWEuzI6NHw2R0aYkXvMpY1fOPZmTqWceTyjZBLvFuZ706mzmmjNWSPO-d46LRB9gaco-HvUnODP8vtVgAIVRzyKFO1i7zbQyGGge_w"
              style={{}}
            />
          </ContentArea>
        )}
        headerRightContainerStyle={{ display: 'none' }}
        style={[
          { height: applyScale(HEADER_EXPANDED_HEIGHT) },
          boxShadow({ elevation: 0, shadowColor: colors.BG_WHITE_COLOR })
        ]}
      />

      <ScrollView
        scrollEnabled
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Container>
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
            <ScrollView horizontal style={{ paddingLeft: 30, marginTop: 20 }}>
              {products.map(product => (
                <ProductBox key={product.name}>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductImage
                    resizeMode="contain"
                    source={require('../../../../../assets/images/food_details_product_2.png')}
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
