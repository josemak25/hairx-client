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
import { useThemeContext } from '../../../../theme';

interface VisitProps {
    time: string;
    index: number;
    title: string;
    purpose: string;
}

export default function Visits(props: VisitProps) {

    const { colors } = useThemeContext()

    const ContentColor = ((props.index === 0) ? colors.BG_LIGHT_PINK_COLOR : colors.BG_LIGHT_BLUE_COLOR)
    const TimeColor = ((props.index === 0) ? colors.FONT_RED_COLOR : colors.BG_DARK_BLUE_COLOR)

    return (
        <Container>
            <Content style={{ backgroundColor: ContentColor }}>
                <Time style={{ color: TimeColor }}>{props.time}</Time>
                <Title>{props.title}</Title>
                <Purpose>Purpose: {props.purpose}</Purpose>
            </Content>
            <Booking>
                <Book>Book Now</Book>
            </Booking>
        </Container>
    );
}
