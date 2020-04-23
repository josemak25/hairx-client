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
  CardValue,
  AssessmentCard,
  AssessmentCardContainer,
  AssessmentLabel,
  AssessmentCardContent,
  ContentLabel,
  ContentValue,
  ValueDegreeContainer,
  ValueDegree
} from './styles';

interface HairCareScreenScreenProp extends NavigationInterface {
  testID?: string;
  assessments: { label: string; value: string; degree: string }[];
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
        <AssessmentLabel>Hair assessment</AssessmentLabel>
        <AssessmentCardContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {props.assessments.map((assessment, index) => (
            <AssessmentCard key={index}>
              <AssessmentCardContent>
                <ContentLabel>{assessment.label}</ContentLabel>
                <ContentValue>{assessment.value}</ContentValue>
                <ValueDegreeContainer
                  style={
                    assessment.value.toLowerCase() === 'low' && {
                      backgroundColor: colors.BG_LIGHT_PINK_COLOR
                    }
                  }
                >
                  <ValueDegree
                    style={
                      assessment.value.toLowerCase() === 'low' && {
                        color: colors.BG_RED_COLOR
                      }
                    }
                  >
                    {assessment.degree}
                  </ValueDegree>
                </ValueDegreeContainer>
              </AssessmentCardContent>
            </AssessmentCard>
          ))}
        </AssessmentCardContainer>
      </ContentArea>
    </Container>
  );
}

HairCareDetailScreen.defaultProps = {
  assessments: [
    { label: 'texture', value: 'Fine hair', degree: '3b' },
    { label: 'porosity', value: 'low', degree: '7e' },
    { label: 'elasticity', value: 'Fine hair', degree: '3b' },
    { label: 'texture', value: 'good', degree: '70%' }
  ],
  products: [],
  recommendations: []
};
