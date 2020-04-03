import React from 'react';

import {
  Container,
  Title,
  HeaderLeft,
  HeaderRight,
  HeaderBackTitle
} from './styles';

type HeaderProps = {
  title?: string;
  style?: object;
  headerBackTitleVisible?: boolean;
  headerLeft?: React.ElementType;
  headerRight?: React.ElementType;
  headerLeftContainerStyle?: object;
  headerRightContainerStyle?: object;
};

export default function Header(props: HeaderProps) {
  const {
    title,
    style,
    headerBackTitleVisible,
    headerLeftContainerStyle,
    headerRightContainerStyle
  } = props;

  return (
    <Container style={style}>
      <HeaderLeft style={headerLeftContainerStyle}>
        {props.headerLeft ? <props.headerLeft /> : null}
        {headerBackTitleVisible && <HeaderBackTitle>back</HeaderBackTitle>}
      </HeaderLeft>
      <Title>{title}</Title>
      <HeaderRight style={headerRightContainerStyle}>
        {props.headerRight ? <props.headerRight /> : null}
      </HeaderRight>
    </Container>
  );
}
