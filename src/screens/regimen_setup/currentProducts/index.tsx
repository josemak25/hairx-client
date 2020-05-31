import React, { useState } from 'react';
import Button from '../../../components/button';
import { useThemeContext } from '../../../theme';
import { Container, ProductImage, Content, Title, SubContent } from './style';
import ResponsiveImage from '../../../libs/responsiveImage';
import boxShadow from '../../../utils/boxShadows';

interface CurrentProductProps {
  title: string;
  handleAddProduct(title: string): void;
}

export default function CurrentProduct(props: CurrentProductProps) {
  const { colors, fonts } = useThemeContext();
  const [state, setState] = useState<'flex' | 'none'>('flex');

  const clickAction = () => setState('none');

  return (
    <Container style={{ display: state }}>
      <ProductImage>
        <ResponsiveImage
          width={58}
          height={58}
          imageUrl="https://bit.ly/2L1ujUY"
          thumbnailBlurRadius={2}
        />
      </ProductImage>
      <Content>
        <Title>{props.title}</Title>
        <SubContent>
          <Button
            title="&#65291; Add product"
            activeOpacity={0}
            buttonStyle={[
              {
                paddingLeft: 0,
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: 0,
                backgroundColor: colors.BUTTON_LIGHT_COLOR
              },
              boxShadow({
                elevation: 0,
                shadowOpacity: 0,
                shadowColor: colors.BG_WHITE_COLOR
              })
            ]}
            textStyle={{
              color: colors.FONT_DARK_GOLD_COLOR,
              fontSize: fonts.LARGE_SIZE,
              fontFamily: fonts.JOST_MEDIUM
            }}
            onPress={() => {
              props.handleAddProduct(props.title);
            }}
          />

          <Button
            title="&#8856; Leave empty"
            activeOpacity={0}
            buttonStyle={[
              {
                paddingLeft: 0,
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: 0,
                backgroundColor: colors.INPUT_FIELD_COLOR
              },
              boxShadow({
                elevation: 0,
                shadowOpacity: 0,
                shadowColor: colors.BG_WHITE_COLOR
              })
            ]}
            textStyle={{
              color: colors.FONT_DARK_COLOR,
              fontSize: fonts.LARGE_SIZE,
              fontFamily: fonts.JOST_BOOK,
              opacity: 0.8
            }}
            onPress={clickAction}
          />
        </SubContent>
      </Content>
    </Container>
  );
}
