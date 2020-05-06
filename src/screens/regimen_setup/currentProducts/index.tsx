import React, { useState } from 'react';

import Button from '../../../components/button';
import { useThemeContext } from '../../../theme';
import applyScale from '../../../utils/applyScale';
import { Container, Image, Content, Title, SubContent } from './style';

interface Iprops {
  title: string;
}

export default function CurrentProduct(props: Iprops) {
  const { colors, fonts } = useThemeContext();
  const [state, setstate] = useState<'flex' | 'none'>('flex');

  const clickAction = () => {
    setstate('none');
  };

  const saveAction = () => {};

  return (
    <Container style={{ display: state }}>
      <Image source={require('../../../../assets/images/logo.png')} />
      <Content>
        <Title>{props.title}</Title>
        <SubContent>
          <Button
            title="&#10010; Add product"
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
              color: colors.FONT_DARK_GOLD_COLOR,
              fontWeight: fonts.FONT_WEIGHT_HEAVY,
              backgroundColor: colors.INPUT_FIELD_COLOR,
              fontSize: 14,
              fontFamily: fonts.JOST_MEDIUM
            }}
            onPress={saveAction}
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
              fontWeight: fonts.FONT_WEIGHT_HEAVY,
              color: colors.FONT_DARK_COLOR,
              opacity: 0.8,
              fontSize: 14,
              fontFamily: fonts.JOST_BOOK
            }}
            onPress={clickAction}
          />
        </SubContent>
      </Content>
    </Container>
  );
}
