import React from 'react';
import { FlatList } from 'react-native';
import { NavigationInterface } from '../../types';
import { useThemeContext } from '../../../theme';
import FoodCard from './food-card';
import setCardItemOrder from '../../../utils/setCardItemOrder';
import { dummyFoodData } from '../../../libs/food_list.json';

import { HeaderSection, Description } from './styles';
import { Container, SubHeaderTitle, HeaderTitle } from '../styles';

interface FoodScreenProp extends NavigationInterface {
  testID?: string;
}

export default function FoodScreen(props: FoodScreenProp) {
  const { fonts } = useThemeContext();

  return (
    <Container>
      <FlatList
        ListHeaderComponent={() => (
          <HeaderSection>
            <SubHeaderTitle
              style={{ opacity: 0.4, fontSize: fonts.SMALL_SIZE }}
            >
              recommended
            </SubHeaderTitle>
            <HeaderTitle
              style={{
                fontSize: fonts.LARGE_SIZE * 2,
                fontFamily: fonts.JOST_BOOK,
                marginTop: 20,
                marginBottom: 40
              }}
            >
              foods
            </HeaderTitle>
          </HeaderSection>
        )}
        ListHeaderComponentStyle={{ height: 120 }}
        ListEmptyComponent={<Description>No data yet</Description>}
        renderItem={({ item, index }) => (
          <FoodCard order={setCardItemOrder(index % 2)} {...item} {...props} />
        )}
        data={dummyFoodData}
        contentContainerStyle={{ paddingBottom: 10 }}
        keyExtractor={(_item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={{ width: '92%' }}
      />
    </Container>
  );
}
