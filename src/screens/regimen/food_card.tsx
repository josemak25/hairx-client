import React from 'react';

import { NavigationInterface } from '../types';
import ResponsiveImage from '../../libs/responsiveImage';
import { useThemeContext } from '../../theme';
import {
  CardContent,
  TextContainer,
  Title,
  SubHeaderTitle,
  Description,
  ImageContainer,
  ReadMore,
  DescriptionContainer
} from './styles';

interface FoodCardProp extends NavigationInterface {
  testID?: string;
  image: string;
  title: string;
  description: string;
  style: { imageStyle: object; cardStyle: object };
}

export default function FoodCard(props: FoodCardProp) {
  const { colors, fonts } = useThemeContext();

  const { image, title, description, style, navigation } = props;

  const handleClick = () => {
    navigation.navigate('foodDetailsScreen');
  };

  const FoodImage = () => (
    <ResponsiveImage
      imageUrl={image}
      style={{
        height: '100%',
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        ...props.style.imageStyle
      }}
    />
  );

  return (
    <CardContent style={style.cardStyle} onPress={handleClick}>
      <ImageContainer>
        <FoodImage />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <SubHeaderTitle
          style={{
            fontSize: fonts.SMALL_SIZE,
            color: colors.BG_DARK_BLUE_COLOR
          }}
        >
          benefits
        </SubHeaderTitle>
        <DescriptionContainer>
          <Description numberOfLines={2}>
            {description.length > 120
              ? `${description.substring(0, 120)}...`
              : description}
          </Description>
          <ReadMore>read more...</ReadMore>
        </DescriptionContainer>
      </TextContainer>
    </CardContent>
  );
}
