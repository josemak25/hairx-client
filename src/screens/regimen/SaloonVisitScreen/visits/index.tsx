import React from 'react';

import {
    Container,
    Content,
    Time,
    Title,
    Purpose,
    Booking,
    Book
} from './style'

interface VisitProps {
    time: string;
    title: string;
    purpose: string;
}

export default function Visits(props: VisitProps) {
    return (
        <Container>
            <Content>
                <Time>{props.time}</Time>
                <Title>{props.title}</Title>
                <Purpose>Purpose:{props.purpose}</Purpose>
            </Content>
            <Booking>
                <Book>Book Now</Book>
            </Booking>
        </Container>
    );
}
