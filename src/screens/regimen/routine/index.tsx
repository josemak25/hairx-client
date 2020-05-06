import React from 'react';
import { FlatList } from 'react-native';
import { NavigationInterface } from '../../types';
import { useThemeContext } from '../../../theme';
import RoutineCard from './routine-card';
import setCardItemOrder from '../../../utils/setCardItemOrder';
import { dummyRoutineData } from '../../../libs/routine_list.json';

import { HeaderSection, Description } from './style';
import { Container, SubHeaderTitle, HeaderTitle } from '../styles';

interface RoutineProps extends NavigationInterface {
  testId?: string;
}

export default function RoutineScreen(props: RoutineProps) {
  const { fonts } = useThemeContext();

  props;

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
              routine
            </HeaderTitle>
          </HeaderSection>
        )}
        ListHeaderComponentStyle={{ height: 120 }}
        ListEmptyComponent={<Description>No data yet</Description>}
        renderItem={({ item, index }) => (
          <RoutineCard
            key={index}
            order={setCardItemOrder(index % 2)}
            {...item}
            {...props}
          />
        )}
        data={dummyRoutineData}
        contentContainerStyle={{ paddingBottom: 10 }}
        keyExtractor={(_item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={{ width: '92%' }}
      />
    </Container>
  );
}
