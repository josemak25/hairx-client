import React from 'react';
import boxShadow from '../../../utils/boxShadows';
import { useThemeContext } from '../../../theme';

import { Container, HeaderLeft, HeaderRight, HeaderBackTitle } from './styles';

type HeaderProps = {
  title: React.ElementType;
  titleContainerStyle?: object;
  style?: object;
  headerBackTitleVisible?: boolean;
  headerLeft?: React.ElementType;
  headerRight?: React.ElementType;
  headerLeftContainerStyle?: object;
  headerRightContainerStyle?: object;
};

export default function Header(props: HeaderProps) {
  const { colors } = useThemeContext();

  const {
    style,
    titleContainerStyle,
    headerBackTitleVisible,
    headerLeftContainerStyle,
    headerRightContainerStyle
  } = props;

  return (
    <Container
      style={[
        style,
        boxShadow({ elevation: 5, shadowColor: colors.BG_LIGHT_BLUE_COLOR })
      ]}
    >
      <HeaderLeft style={headerLeftContainerStyle}>
        {props.headerLeft ? <props.headerLeft /> : null}
        {headerBackTitleVisible && <HeaderBackTitle>back</HeaderBackTitle>}
      </HeaderLeft>
      <props.title style={titleContainerStyle} />
      <HeaderRight style={headerRightContainerStyle}>
        {props.headerRight ? <props.headerRight /> : null}
      </HeaderRight>
    </Container>
  );
}
