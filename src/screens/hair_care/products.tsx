import React, { Fragment } from 'react';
import ResponsiveImage from '../../libs/responsiveImage';

import {
  AssessmentCardContainer,
  ProductCard,
  ProductDescription,
  ProductBenefit,
  AssessmentLabel,
  ProductImage
} from './styles';

type ProductsType = {
  description: string;
  benefits: string;
  image: string;
};

interface ProductsProp {
  testID?: string;
  products: ProductsType[];
}

export default function Products({ products }: ProductsProp) {
  return (
    <Fragment>
      {products.length && <AssessmentLabel>Care products</AssessmentLabel>}

      <AssessmentCardContainer
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductBenefit>benefit: {product.benefits}</ProductBenefit>
            <ProductImage>
              <ResponsiveImage
                imageUrl={product.image}
                width={60}
                height={60}
                resizeMode="contain"
                thumbnailBlurRadius={2}
              />
            </ProductImage>
          </ProductCard>
        ))}
      </AssessmentCardContainer>
    </Fragment>
  );
}
