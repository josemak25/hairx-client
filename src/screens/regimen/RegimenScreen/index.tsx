import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { NavigationInterface } from '../../types';
import Card from './cards/Card';
import Data from '../../../libs/getRoutine.json';
import { Container, SubTitle, Title } from './style';

interface RoutineProps extends NavigationInterface {
  testId?: string;
}

export default function RoutineScreen(props: RoutineProps) {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubTitle>RECOMMENDED</SubTitle>
        <Title>ROUTINE</Title>

        {Data.map((item, index) => (
          <Card
            key={index}
            order={index % 2}
            time={item.time}
            heading={item.heading}
            image={item.img}
            content={item.content}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
