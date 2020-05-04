import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
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
  Period,
  TitleText,
  Description,
  Recommendation,
  Products,
  Price,
  PriceCover,
  PriceSuperscript,
  ProductImage,
  Name,
  SplashTopStatusBar
} from './styles';

const HEADER_EXPANDED_HEIGHT = 300;

const products = RecommendedProducts;

interface RegimenRoutineScreenProp extends NavigationInterface {
  testID?: string;
}

export default function RegimenRoutineDetailScreen(
  props: RegimenRoutineScreenProp
) {
  const { navigation } = props;

  const { colors } = useThemeContext();

  const {
    state: { grid }
  } = useStoreContext();

  return (
    <SafeAreaView>
      <SplashTopStatusBar
        style={{ backgroundColor: colors.BG_DARK_BLUE_GREEN_COLOR }}
      >
        <StatusBar barStyle="dark-content" />
      </SplashTopStatusBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.BG_DARK_BLUE_GREEN_COLOR }}
      >
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
              <Ionicons
                name="md-time"
                size={10}
                color={colors.FONT_BLUE_COLOR}
              />
              <Period>At night</Period>
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
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: 'row', marginLeft: 10, marginTop: '5%' }}
          >
            {products.map(item => (
              <Card
                style={{
                  backgroundColor: colors.BG_LIGHT_GRAY,
                  marginLeft: 10,
                  width: grid.cardSize / 2 + 30,
                  height: 200,
                  borderRadius: 5,
                  justifyContent: 'flex-start'
                }}
              >
                <PriceCover>
                  <Price>{item.price}</Price>
                  <PriceSuperscript>{item.priceSuperscript}</PriceSuperscript>
                </PriceCover>
                <ProductImage source={item.image} />
                <Name>{item.name}</Name>
                <Button
                  title="Buy now"
                  buttonStyle={{
                    backgroundColor: colors.BG_LIGHT_GOLD_COLOR,
                    borderTopColor: colors.BG_LIGHT_GOLD_COLOR,
                    paddingTop: 5,
                    paddingBottom: 5,
                    position: 'absolute',
                    bottom: 0,
                    marginBottom: 10
                  }}
                  textStyle={{ color: colors.ACTIVE_ICON_COLOR }}
                />
              </Card>
            ))}
          </ScrollView>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
