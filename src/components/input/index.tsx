import React from 'react';

import { Container, TextInput, InputLabel } from './styles';

type InputProps = {
  textInputStyle?: {};
  contanierStyle?: {};
  testID?: string;
  inputLabel?: string;
  placeholder: string;
  defaultValue: string;
  inputLabelStyle?: {};
  secureTextEntry?: boolean;
  onChangeText(T: any): void;
};

export default function Input(props: InputProps) {
  return (
    <Container style={props.contanierStyle}>
      {props.inputLabel && <InputLabel style={props.inputLabelStyle}>{props.inputLabel}</InputLabel>}
      <TextInput {...props} style={props.textInputStyle} />
    </Container>
  );
}
