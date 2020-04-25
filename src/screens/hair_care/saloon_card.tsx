import React from 'react';
import Card from '../../components/card';
import { NavigationInterface } from '../types';
import ResponsiveImage from '../../libs/responsiveImage';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';

import {
  Cover,
  CardLabel,
  CardLabelContainer,
  CardText,
  DateText
} from './styles';

interface SaloonCardProp extends NavigationInterface {
  testID?: string;
  date: string;
  issue: string;
}

export default function SaloonCard(props: SaloonCardProp) {
  const { colors } = useThemeContext();
  const {
    state: { grid }
  } = useStoreContext();

  const { date, issue, navigation } = props;

  return (
    <Card
      onPress={() => {}}
      style={{
        flex: 1,
        height: 184,
        borderRadius: 5,
        justifyContent: 'flex-start',
        backgroundColor: colors.BG_LIGHT_GOLD_COLOR,
        margin: 6
      }}
    >
      <Cover>
        <ResponsiveImage
          width={grid.cardSize / 2}
          height={123}
          imageUrl="https://bit.ly/3aGEc4O"
          style={{
            alignSelf: 'flex-start',
            borderRadius: 5,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          }}
        />
        <ResponsiveImage
          width={155 / 2}
          height={123}
          imageUrl="https://bit.ly/3byyQdb"
          style={{
            alignSelf: 'flex-end',
            borderRadius: 5,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }}
        />
      </Cover>
      <DateText>{date}</DateText>
      <CardLabelContainer>
        <CardLabel>issue:</CardLabel>
        <CardText>{issue}</CardText>
      </CardLabelContainer>
    </Card>
  );
}
