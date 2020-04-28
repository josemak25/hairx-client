import React from 'react';

import { Container, TextInput, InputLabel } from './styles';

type InputProps = {
  textInputStyle?: {};
  contanierStyle?: {};
  testID?: string;
  inputLabel?: string;
  placeholder: string;
  defaultValue: string;
  onChangeText(T: any): void;
};

export default function Input(props: InputProps) {
  return (
    <Container style={props.contanierStyle}>
      {props.inputLabel && <InputLabel>{props.inputLabel}</InputLabel>}
      <TextInput {...props} style={props.textInputStyle} />
    </Container>
  );
}
