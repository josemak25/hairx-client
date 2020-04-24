import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { Animated } from 'react-native';

import {
  Container,
  BackButtonContainer,
  Cover,
  ContentArea,
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
  ValueDegree,
  ProductDescription,
  ProductBenefit,
  ProductImage,
  ProductCard,
  RecommendationView,
  Recommendation,
  RecommendationFrequency,
  BeforeImage,
  AfterImage,
  RecommendationContainer
} from './styles';

interface HairCareScreenScreenProp extends NavigationInterface {
  testID?: string;
  assessments: { label: string; value: string; degree: string }[];
  products: { description: string; benefits: string; image: string }[];
  recommendations: { text: string; frequency: string }[];
}

export default function HairCareDetailScreen(props: HairCareScreenScreenProp) {
  const { colors } = useThemeContext();
  const [state] = useState({
    beforeAnimation: new Animated.Value(1),
    afterAnimation: new Animated.Value(1)
  });

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(state.beforeAnimation, {
        toValue: 0.5,
        duration: 1000
      }),
      Animated.timing(state.beforeAnimation, {
        toValue: 1,
        duration: 1000
      }),
      Animated.timing(state.afterAnimation, {
        toValue: 1.5,
        duration: 1000
      }),
      Animated.timing(state.afterAnimation, {
        toValue: 1,
        duration: 1000
      })
    ]).start();
  };

  setTimeout(() => startAnimation(), 1000);

  const PopulateAssessments = () => (
    <AssessmentCardContainer
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center'
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
  );

  const PopulateProducts = () => (
    <AssessmentCardContainer
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center'
      }}
    >
      {props.products.map((product, index) => (
        <ProductCard key={index}>
          <AssessmentCardContent>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductBenefit>benefit: {product.benefits}</ProductBenefit>
            <ProductImage source={{ uri: product.image.toString() }} />
          </AssessmentCardContent>
        </ProductCard>
      ))}
    </AssessmentCardContainer>
  );

  const PopulateRecommendations = () => (
    <RecommendationContainer>
      {props.recommendations.map((recommendation, index) => (
        <RecommendationView key={index}>
          <Recommendation>{recommendation.text}</Recommendation>
          <RecommendationFrequency>
            {recommendation.frequency}
          </RecommendationFrequency>
        </RecommendationView>
      ))}
    </RecommendationContainer>
  );

  return (
    <Container
      contentContainerStyle={{ alignItems: 'center' }}
      showsVerticalScrollIndicator={false}
    >
      <Cover>
        <AnimateBeforeImage
          source={require('../../../assets/images/before.jpg')}
          style={{
            transform: [
              {
                scale: state.beforeAnimation
              }
            ]
          }}
        />
        <AnimateAfterImage
          source={require('../../../assets/images/after-image.jpg')}
          style={{
            transform: [
              {
                scale: state.afterAnimation
              }
            ]
          }}
        />
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
        {props.assessments.length > 0 && (
          <AssessmentLabel>Hair assessment</AssessmentLabel>
        )}
        <PopulateAssessments />
        {props.products.length > 0 && (
          <AssessmentLabel>Care products</AssessmentLabel>
        )}
        <PopulateProducts />
        {props.recommendations.length > 0 && (
          <AssessmentLabel>Recommendations</AssessmentLabel>
        )}
        <PopulateRecommendations />
      </ContentArea>
    </Container>
  );
}

const AnimateAfterImage = Animated.createAnimatedComponent(AfterImage);
const AnimateBeforeImage = Animated.createAnimatedComponent(BeforeImage);

HairCareDetailScreen.defaultProps = {
  assessments: [
    { label: 'texture', value: 'Fine hair', degree: '3b' },
    { label: 'porosity', value: 'low', degree: '7e' },
    { label: 'elasticity', value: 'Fine hair', degree: '3b' },
    { label: 'texture', value: 'good', degree: '70%' }
  ],
  products: [
    {
      description: 'Cantu Coconut Curling Cream, 12 Ounce',
      benefits: 'Fine hair',
      image: require('../../../assets/images/balea-cream.jpg')
    },
    {
      description: 'ECO Styler Professional Styling Gel, Olive Oil',
      benefits: 'Growth',
      image: require('../../../assets/images/balea-cream.jpg')
    },
    {
      description: 'The Curl Friend Rich in Olive & Natural Oils',
      benefits: 'Styling',
      image: require('../../../assets/images/butter-cream.jpg')
    },
    {
      description: 'For magical growth',
      benefits: 'Exotic',
      image: require('../../../assets/images/balea-cream.jpg')
    }
  ],
  recommendations: [
    {
      text: 'Sleep on silk pillow',
      frequency: 'DAILY'
    },
    {
      text: 'Brush and blow out',
      frequency: 'DAILY'
    },
    {
      text: 'Straighten with straightener',
      frequency: 'DAILY'
    }
  ]
};
