import React from 'react';
import { ScrollView, StatusBar, Dimensions } from 'react-native';
import expoConstants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import ResponsiveImage from '../../../../libs/responsiveImage';
import { NavigationInterface } from '../../../types';
import { useThemeContext } from '../../../../theme';
import Header from '../../../../commons/header';
import applyScale from '../../../../utils/applyScale';
import boxShadow from '../../../../utils/boxShadows';
import Card from '../../../../components/card';
import Button from '../../../../components/button';

import {
  Container,
  ContentArea,
  BackButton,
  ProductsContainer,
  HeaderTitle,
  SubHeaderTitle,
  HeaderSection,
  TimeCover,
  Period,
  TitleText,
  Description,
  ProductCard,
  ProductPrice,
  ProductImage,
  ProductTitle
} from './styles';

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;

const HEADER_IMAGE_WIDTH = Math.floor(
  Dimensions.get('screen').width <= 375
    ? Dimensions.get('screen').width + 50
    : Dimensions.get('screen').width + 10
);

type RoutineDetailsType = {
  title: string;
  description: string;
  afterTreatmentImage: string;
  products: { price: string; image: string; name: string }[];
};

interface RegimenRoutineScreenProp extends NavigationInterface {
  testID?: string;
  route: { params: RoutineDetailsType };
}

export default function RegimenRoutineDetailScreen(
  props: RegimenRoutineScreenProp
) {
  const { colors, fonts } = useThemeContext();

  const {
    navigation,
    route: { params }
  } = props;

  const { title, description, afterTreatmentImage, products } = params;

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
        <TimeCover>
          <Ionicons name="md-time" size={15} color={colors.FONT_BLUE_COLOR} />
          <Period>At night</Period>
        </TimeCover>
        <TitleText>{title}</TitleText>
        <Description>{description}</Description>
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
        </ProductsContainer>
        <ScrollView
          horizontal
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
          showsHorizontalScrollIndicator={false}
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
              <Button
                title="Buy now"
                activeOpacity={0.2}
                buttonStyle={{
                  backgroundColor: colors.BG_LIGHT_GOLD_COLOR,
                  borderTopColor: colors.BG_LIGHT_GOLD_COLOR,
                  paddingTop: 10,
                  paddingBottom: 10
                }}
                textStyle={{ color: colors.ACTIVE_ICON_COLOR }}
              />
            </ProductCard>
          ))}
        </ScrollView>
      </ScrollView>
    </Container>
  );
}
