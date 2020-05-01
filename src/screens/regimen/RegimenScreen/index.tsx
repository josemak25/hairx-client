import React from 'react';

import { NavigationInterface } from '../../types';
import Card from "./cards/Card";
import { Container, SubTitle, Title } from "./style";

interface RoutineProps extends NavigationInterface {
    testId?: string;
}

export default function RoutineScreen(props: RoutineProps) {
    return (
        <Container>
            <SubTitle>Recommendation</SubTitle>
            <Title>Recommendation</Title>

            {
                data.map((item, index) => <Card key={index}
                    order={index % 2}
                    time={item.time}
                    heading={item.heading}
                    image={require(item.img)}
                    content={item.content}
                />)
            }
        </Container>
    );
}


const data = [
    {
        img: '../../../../assets/images/routine/first.png',
        time: 'At Night',
        heading: 'Pre-poo your hair',
        content: 'To stimulate  your hair follicles and grow your hair, pre-poo hair...see more'
    },
    {
        img: '../../../../assets/images/routine/second.png',
        time: 'Every Day',
        heading: 'Use lightweight serum',
        content: 'This is a crucial part of your daily regimen to repair damages and ... see more'
    },
    {
        img: '../../../../assets/images/routine/third.png',
        time: 'At Night',
        heading: 'Pre-poo your hair',
        content: 'To stimulate  your hair follicles and grow your hair, pre-poo hair...see more'
    },
    {
        img: '../../../../assets/images/routine/last.png',
        time: 'Every Day',
        heading: 'Use lightweight serum',
        content: 'This is a crucial part of your daily regimen to repair damages and ... see more'
    }
]