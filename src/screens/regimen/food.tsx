import React from 'react';
import { NavigationInterface } from '../types';
import { StatusBar, FlatList } from 'react-native';
import { useThemeContext } from '../../theme';
import SafeAreaView from '../../commons/safe-area-view';
import Header from '../../commons/header';
import SubHeaderSection from './sub_header_section';
import FoodCard from './food_card';
import dummyFoods from '../../libs/food_list.json';

import {
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleLabel,
  SubHeaderTitle,
  HeaderSection,
  Description
} from './styles';

interface FoodScreenProp extends NavigationInterface {
  testID?: string;
  foods: { image: string; title: string; description: string }[];
}

export default function FoodScreen(props: FoodScreenProp) {
  const { colors, fonts } = useThemeContext();
  const { navigation, foods } = props;

  const HeaderComponent = () => (
    <HeaderSection>
      <SubHeaderTitle
        style={{
          opacity: 0.3,
          fontSize: fonts.SMALL_SIZE,
          marginTop: 15
        }}
      >
        recommended
      </SubHeaderTitle>
      <SubHeaderTitle
        style={{
          marginTop: 5,
          marginBottom: 25
        }}
      >
        foods
      </SubHeaderTitle>
    </HeaderSection>
  );

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.BG_WHITE_COLOR}
      />
      <Header
        title={() => (
          <HeaderTitleContainer>
            <HeaderTitle>hairx</HeaderTitle>
            <HeaderTitleLabel>regimen</HeaderTitleLabel>
          </HeaderTitleContainer>
        )}
      />
      <SubHeaderSection navigation={navigation} />
      <FlatList
        ListHeaderComponent={HeaderComponent}
        ListEmptyComponent={
          <Description
            style={{
              opacity: 1,
              alignSelf: 'center',
              fontSize: fonts.LARGE_SIZE * 2
            }}
          >
            No data yet
          </Description>
        }
        renderItem={({ item, index }) => {
          const style =
            index % 2 === 0
              ? {
                  cardStyle: {
                    flexDirection: 'row'
                  },
                  imageStyle: {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                  }
                }
              : {
                  cardStyle: { flexDirection: 'row-reverse' },
                  imageStyle: {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    alignSelf: 'flex-end'
                  }
                };
          return <FoodCard {...item} navigation={navigation} style={style} />;
        }}
        data={foods}
        keyExtractor={(_item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

FoodScreen.defaultProps = { foods: dummyFoods };
