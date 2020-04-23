import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';

import {
  Container,
  BackButtonContainer,
  Cover,
  ContentArea,
  CoverPart,
  HairCareSaloonCard,
  CardInfo,
  CardLabel,
  CardValue
} from './styles';

interface HairCareScreenScreenProp extends NavigationInterface {
  testID?: string;
}

export default function HairCareDetailScreen(props: HairCareScreenScreenProp) {
  const { colors } = useThemeContext();

  return (
    <Container
      contentContainerStyle={{ alignItems: 'center' }}
      showsVerticalScrollIndicator={false}
    >
      <Cover>
        <CoverPart source={require('../../../assets/images/before.jpg')} />
        <CoverPart source={require('../../../assets/images/after-image.jpg')} />
        <BackButtonContainer>
          <Ionicons
            name="ios-arrow-back"
            size={20}
            color={colors.BG_WHITE_COLOR}
          />
        </BackButtonContainer>
      </Cover>
      <ContentArea>
        <HairCareSaloonCard>
          <CardInfo>
            <CardLabel>goal</CardLabel>
            <CardValue>Hair Growth</CardValue>
          </CardInfo>
          <CardInfo>
            <CardLabel>date</CardLabel>
            <CardValue>April 7</CardValue>
          </CardInfo>
          <CardInfo>
            <CardLabel>Salon</CardLabel>
            <CardValue>JHB Studio</CardValue>
          </CardInfo>
        </HairCareSaloonCard>
      </ContentArea>
    </Container>
    // </View>
  );
}
