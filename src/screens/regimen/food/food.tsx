import React from 'react';
import { FlatList } from 'react-native';

import { NavigationInterface } from '../../types';
import { useThemeContext } from '../../../theme';
import FoodCard from './Card';
import dummyFoods from '../../../libs/food_list.json';

import { SubHeaderTitle, HeaderSection, Description } from './styles';

interface FoodScreenProp extends NavigationInterface {
  testID?: string;
  foods?: { image: string; title: string; description: string }[];
}

export default function FoodScreen(props: FoodScreenProp) {
  const { fonts } = useThemeContext();
  const { navigation, foods } = props;

  const ListHeaderComponent = () => (
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
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
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
      showsVerticalScrollIndicator={false}
    />
  );
}

FoodScreen.defaultProps = { foods: dummyFoods };
