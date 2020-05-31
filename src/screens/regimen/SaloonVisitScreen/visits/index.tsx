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
  bookBg: string;
}

export default function Visits(props: VisitProps) {
  const { colors } = useThemeContext();
  const [state, setstate] = useState<stateProps>({
    booking: 'Book Now',
    contentColor: colors.BG_LIGHT_BLUE_COLOR,
    timeColor: colors.BG_DARK_BLUE_COLOR,
    bookBg: colors.BG_LIGHT_YELLOW_COLOR
  });

  const checkBooking = () => {
    switch (state.booking) {
      case 'Book Now':
        return setstate({
          booking: 'Booked',
          contentColor: colors.BG_LIGHT_PINK_COLOR,
          timeColor: colors.FONT_RED_COLOR,
          bookBg: colors.BG_LIGHT_GRAY
        });
      case 'Booked':
        return setstate({
          booking: 'Book Now',
          contentColor: colors.BG_LIGHT_BLUE_COLOR,
          timeColor: colors.BG_DARK_BLUE_COLOR,
          bookBg: colors.BG_LIGHT_YELLOW_COLOR
        });
      default:
        return;
    }
  };

  return (
    <Container>
      <Content
        style={{
          backgroundColor: state.contentColor
        }}
      >
        <Time style={{ color: state.timeColor }}>{props.time}</Time>
        <Title>{props.title}</Title>
        <Purpose>Pulrpose: {props.purpose}</Purpose>
      </Content>
      <Booking
        onPress={checkBooking}
        style={{
          backgroundColor: state.bookBg
        }}
      >
        <Book
          style={{
            fontWeight: state.booking === 'Booked' ? 'bold' : '400'
          }}
        >
          {state.booking}
        </Book>
      </Booking>
    </Container>
  );
}
