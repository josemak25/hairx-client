import React from 'react';

import Button from '../../../components/button';
import { Container, Image, Content, Title, SubContent } from './style';
import { useThemeContext } from '../../../theme';
import applyScale from '../../../utils/applyScale';

interface Iprops {
  option: string;
}

export default function CurrentProduct(props: Iprops) {
  const { colors, fonts } = useThemeContext();
  console.log('nothing entered');
  return (
    <Container>
      <Image source={require('../../../../assets/images/logo.png')} />
      <Content>
        <Title>{props.option}</Title>
        <SubContent>
          <Button
            title=" &#10010; Add Product"
            activeOpacity={1}
            buttonStyle={{
              width: applyScale(110),
              height: applyScale(20),
              padding: 1,
              opacity: 1,
              textAlign: 'left',
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: colors.BUTTON_LIGHT_COLOR
            }}
            textStyle={{
              color: 'red',
              backgroundColor: colors.INPUT_FIELD_COLOR,
              fontSize: 14,
              fontFamily: fonts.JOST_MEDIUM
            }}
          />
          <Button
            title="&#8856; Leave empty"
            activeOpacity={0}
            buttonStyle={{
              width: applyScale(120),
              height: applyScale(20),
              backgroundColor: colors.INPUT_FIELD_COLOR,
              borderWidth: 0
            }}
            textStyle={{
              color: colors.FONT_DARK_COLOR,
              opacity: 0.8,
              fontSize: 14,
              fontFamily: fonts.JOST_BOOK
            }}
          />
        </SubContent>
      </Content>
    </Container>
  );
}
