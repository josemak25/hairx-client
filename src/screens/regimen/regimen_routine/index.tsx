import React from 'react';
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationInterface } from '../../types';
import { useThemeContext } from '../../../theme';
import SafeAreaView from '../../../commons/safe-area-view';
import Header from '../../../commons/header';
import applyScale from '../../../utils/applyScale';
import boxShadow from '../../../utils/boxShadows';
import { RecommendedProducts } from '../../../libs/recommendedProducts';
import Card from '../../../components/card';
import Button from '../../../components/button';
import { useStoreContext } from '../../../store';

import {
  Container,
  Cover,
  IconCover,
  BackgroundCover,
  DescriptionCover,
  TimeCover,
  Night,
  TitleText,
  Description,
  Recommendation,
  Products,
  Price,
  PriceCover,
  PriceSub,
  ProductImage,
  Name
} from './styles';

const HEADER_EXPANDED_HEIGHT = 300;

const products = RecommendedProducts;

interface RegimenRoutineScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenRoutineScreen(props: RegimenRoutineScreenProp) {
  const { navigation } = props;

  const { colors } = useThemeContext();

  const {
    state: { grid }
  } = useStoreContext();

  return (
    <SafeAreaView>
      <Header
        headerLeft={() => (
          <IconCover onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-arrow-back"
              size={20}
              color={colors.BG_WHITE_COLOR}
            />
          </IconCover>
        )}
        headerLeftContainerStyle={{
          paddingLeft: 10,
          position: 'absolute',
          alignItems: 'flex-start',
          paddingTop: 10,
          zIndex: 999
        }}
        title={() => (
          <Cover>
            <BackgroundCover
              source={require('../../../../assets/images/Female_Hair_Rearview.png')}
            />
          </Cover>
        )}
        headerRightContainerStyle={{ display: 'none' }}
        style={[
          { height: applyScale(HEADER_EXPANDED_HEIGHT) },
          boxShadow({ elevation: 0, shadowColor: colors.BG_WHITE_COLOR })
        ]}
      />
      <Container>
        <DescriptionCover>
          <TimeCover>
            <Ionicons name="md-time" size={10} color={colors.FONT_BLUE_COLOR} />
            <Night>At night</Night>
          </TimeCover>
          <TitleText>Pre-poo your hair</TitleText>
          <Description>
            To stimulate your hair follicles and grow your hair, pre-poo your
            hair shampooing and give your scalp a massage with light oil along
            with drops of essential oils.
          </Description>
        </DescriptionCover>
        <Recommendation>Recommended</Recommendation>
        <Products>Products</Products>
      </Container>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flexDirection: 'row', marginLeft: 10 }}
      >
        {products.map(item => (
          <Card
            style={{
              backgroundColor: colors.BG_LIGHT_GRAY,
              marginLeft: 10,
              width: grid.cardSize / 2 + 10,
              height: 170,
              borderRadius: 5
            }}
          >
            <PriceCover>
              <Price>{item.price}</Price>
              <PriceSub>{item.subPrice}</PriceSub>
            </PriceCover>
            <ProductImage source={item.image} />
            <Name>{item.name}</Name>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
