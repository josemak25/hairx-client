import React, { useState } from 'react';

import { useThemeContext } from '../../../../theme';
import {
    Container,
    Content,
    Time,
    Title,
    Purpose,
    Booking,
    Book
} from './style';

interface VisitProps {
    time: string;
    index: number;
    title: string;
    purpose: string;
}

interface stateProps {
    booking: 'Book Now' | 'Booked';
    contentColor: string;
    timeColor: string;
}

export default function Visits(props: VisitProps) {
    const { colors } = useThemeContext();
    const [state, setstate] = useState<stateProps>({
        booking: 'Book Now',
        contentColor: colors.BG_LIGHT_BLUE_COLOR,
        timeColor: colors.BG_DARK_BLUE_COLOR
    });

    const checkBooking = () => {
        switch (state.booking) {
            case 'Book Now':
                setstate({
                    booking: 'Booked',
                    contentColor: colors.BG_LIGHT_PINK_COLOR,
                    timeColor: colors.FONT_RED_COLOR
                });
            case 'Booked':
                setstate({
                    booking: 'Book Now',
                    contentColor: colors.BG_LIGHT_BLUE_COLOR,
                    timeColor: colors.BG_DARK_BLUE_COLOR
                });
        }
    };

    return (
        <Container>
            <Content style={{ backgroundColor: state.contentColor }}>
                <Time style={{ color: state.timeColor }}>{props.time}</Time>
                <Title>{props.title}</Title>
                <Purpose>Pulrpose: {props.purpose}</Purpose>
            </Content>
            <Booking onPress={checkBooking}>
                <Book>{state.booking}</Book>
            </Booking>
        </Container>
    );
}
