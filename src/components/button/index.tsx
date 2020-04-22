import React, {ReactNode} from 'react';
import boxShadow from '../../utils/boxShadows';

import { Container, ButtonText } from './styles';

type ButtonProps = {
  buttonStyle?: {};
  textStyle?: {};
  testID?: string;
  title: string;
  activeOpacity?: number;
  onPress?(): void;
  children?: ReactNode;
};

export default function Button(props: ButtonProps) {
  const { title, buttonStyle, textStyle } = props;

  return (
    <Container
      activeOpacity={0.5}
      style={[boxShadow({ elevation: 0 }), buttonStyle]}
      {...props}
    >
      <ButtonText style={textStyle}>{title}</ButtonText>
      {props.children}
    </Container>
  );
}
