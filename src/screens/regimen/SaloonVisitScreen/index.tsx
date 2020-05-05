import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { NavigationInterface } from '../../types';
import Data from '../../../libs/visit.json';
import Visits from './visits';
import {
    Container,
    SubTitle,
    Title,
    Content
} from './style';

interface RoutineProps extends NavigationInterface {
    testId?: string;
}

export default function SaloonVisitScreen(props: RoutineProps) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Container>
                <SubTitle>RECOMMENDED</SubTitle>
                <Title>ROUTINE</Title>
                <Content>
                    Claire, no hair care routine is complete with a visit to a
                    hair saloon where expert stylist can assess your hair.
                </Content>
                {Data.map((item, index) => (
                    <Visits
                        key={index}
                        time={item.time}
                        title={item.title}
                        purpose={item.purpose}
                    />
                ))}
            </Container>
        </ScrollView>
    );
}
