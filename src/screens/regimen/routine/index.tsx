import React from 'react';
import { FlatList } from 'react-native';

import { NavigationInterface } from '../../types';
import Card from './Card';
import Data from '../../../libs/getRoutine.json';
import { SubTitle, Title, HeaderSection, Description } from './style';

interface RoutineProps extends NavigationInterface {
  testId?: string;
}

const ListHeaderComponent = () => (
  <HeaderSection>
    <SubTitle>RECOMMENDED</SubTitle>
    <Title>ROUTINE</Title>
  </HeaderSection>
);

export default function RoutineScreen(props: RoutineProps) {
  const setOrder = (index: number) => (index === 1 ? 'row-reverse' : 'row');
  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      ListEmptyComponent={<Description>No data yet</Description>}
      renderItem={({ item, index }) => (
        <Card
          key={index}
          order={setOrder(index % 2)}
          time={item.time}
          heading={item.heading}
          image={item.img}
          content={item.content}
        />
      )}
      data={Data}
      keyExtractor={(_item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}
