import React from 'react';
import { Ionicons } from "@expo/vector-icons";

import {
    CardContainer,
    Context,
    Time,
    Heading,
    Content
} from "./style";
import { Image } from '../../../../libs/responsiveImage/styles';

interface CardProps {
    time: string;
    order: number;
    image: string;
    content: string;
    heading: string;
}

export default function Card(props: CardProps) {
    return (
        <CardContainer>
            <Image
                source={props.image} />
            <Context>
                <Time>
                    <Ionicons />
                    {props.time}
                </Time>
                <Heading>{props.heading}</Heading>
                <Content>{props.content}</Content>
            </Context>
        </CardContainer>
    );
}
