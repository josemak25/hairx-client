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
            buttonStyle={{
              width: applyScale(110),
              height: 20,
              padding: 0,
              opacity: 1,
              textAlign: 'left',
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: colors.BUTTON_LIGHT_COLOR
            }}
            textStyle={{
              color: 'red',
              backgroundColor: 'gold',
              fontSize: 14,
              fontFamily: fonts.JOST_MEDIUM
            }}
          />
          <Button
            title="&#8856; Leave empty"
            buttonStyle={{
              width: applyScale(120),
              height: 20,
              padding: 0,
              backgroundColor: colors.BG_WHITE_COLOR,
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
