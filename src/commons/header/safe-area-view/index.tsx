import React, { FunctionComponent } from 'react';
import { Container } from './styles';

type SafeAreaViewProps = { style?: object };

const SafeAreaView: FunctionComponent<SafeAreaViewProps> = ({
  children,
  style
}) => <Container style={style}>{children}</Container>;

export default SafeAreaView;
