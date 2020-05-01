import React from 'react';
import { ScrollView } from 'react-native';

import { NavigationInterface } from '../../types';
import Card from "./cards/Card";
import Data from "../../../libs/getRoutine.json"
import { Container, SubTitle, Title } from "./style";

interface RoutineProps extends NavigationInterface {
  testId?: string;
}

export default function RoutineScreen(props: RoutineProps) {
  return (
    <Container>
      <ScrollView>
        <SubTitle>Recommendation</SubTitle>
        <Title>Recommendation</Title>

        {
          Data.map((item, index) => <Card key={index}
            order={index % 2}
            time={item.time}
            heading={item.heading}
            image={require(item.img)}
            content={item.content}
          />)
        }
      </ScrollView>
    </Container>
  );
}
