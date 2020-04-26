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
            title="&#10010; Add Product"
            activeOpacity={0}
            buttonStyle={{
              paddingLeft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRigth: 0,
              backgroundColor: colors.BUTTON_LIGHT_COLOR
            }}
            textStyle={{
              width: applyScale(98),
              height: applyScale(20),
              color: '#BAB200',
              backgroundColor: colors.INPUT_FIELD_COLOR,
              fontSize: 14,
              fontFamily: fonts.JOST_MEDIUM
            }}
          />
          <Button
            title="&#8856; Leave empty"
            activeOpacity={0}
            buttonStyle={{
              paddingLeft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRigth: 0,
              backgroundColor: colors.INPUT_FIELD_COLOR,
              borderWidth: 0
            }}
            textStyle={{
              width: applyScale(90),
              height: applyScale(20),
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
