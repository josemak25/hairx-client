import React from 'react';
import { ScrollView, Dimensions, StatusBar } from 'react-native';
import expoConstants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { NavigationInterface } from '../../../types';
import { useThemeContext } from '../../../../theme';
import applyScale from '../../../../utils/applyScale';
import ResponsiveImage from '../../../../libs/responsiveImage';
import boxShadow from '../../../../utils/boxShadows';
import Header from '../../../../commons/header';

import {
  Container,
  BackButton,
  FoodDetailHeader,
  FoodDetailBenefits,
  FoodDetailText,
  ProductsContainer,
  ProductCard,
  ProductPrice,
  ContentArea,
  ProductImage,
  ProductTitle,
  HeaderSection,
  SubHeaderTitle,
  HeaderTitle
} from './styles';

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;

const HEADER_IMAGE_WIDTH = Math.floor(
  Dimensions.get('screen').width <= 375
    ? Dimensions.get('screen').width + 50
    : Dimensions.get('screen').width + 10
);

type FoodDetailsType = {
  title: string;
  description: string;
  afterTreatmentImage: string;
  products: { price: string; image: string; name: string }[];
};

interface FoodDetailsScreenProp extends NavigationInterface {
  testID?: string;
  route: { params: FoodDetailsType };
}

export default function FoodDetailsScreen(props: FoodDetailsScreenProp) {
  const {
    navigation,
    route: { params }
  } = props;

  const { title, description, afterTreatmentImage, products } = params;

  const { colors, fonts } = useThemeContext();

  return (
    <Container style={{ paddingBottom: expoConstants.statusBarHeight - 15 }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
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
          paddingTop: expoConstants.statusBarHeight + 5,
          zIndex: 999
        }}
        title={() => (
          <ContentArea>
            <ResponsiveImage
              width={HEADER_IMAGE_WIDTH}
              height={HEADER_EXPANDED_HEIGHT}
              imageUrl={afterTreatmentImage}
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
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          paddingTop: 40,
          paddingLeft: 10,
          paddingRight: 10
        }}
        showsVerticalScrollIndicator={false}
      >
        <FoodDetailHeader>{title}</FoodDetailHeader>
        <FoodDetailBenefits>Benefits</FoodDetailBenefits>
        <FoodDetailText>{description}</FoodDetailText>
        <ProductsContainer>
          <HeaderSection>
            <SubHeaderTitle
              style={{ opacity: 0.4, fontSize: fonts.MEDIUM_SIZE }}
            >
              recommended
            </SubHeaderTitle>
            <HeaderTitle
              style={{
                fontSize: fonts.LARGE_SIZE * 2,
                fontFamily: fonts.JOST_BOOK,
                marginTop: 5,
                marginBottom: 10
              }}
            >
              products
            </HeaderTitle>
          </HeaderSection>
          <ScrollView
            horizontal
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
          >
            {products.map(({ name, price, image }) => (
              <ProductCard key={name}>
                <ProductPrice>{price}</ProductPrice>
                <ProductImage>
                  <ResponsiveImage
                    imageUrl={image}
                    width={60}
                    height={60}
                    resizeMode="contain"
                    thumbnailBlurRadius={2}
                    style={{ marginTop: 10 }}
                  />
                </ProductImage>
                <ProductTitle>{name}</ProductTitle>
              </ProductCard>
            ))}
          </ScrollView>
        </ProductsContainer>
      </ScrollView>
    </Container>
  );
}
