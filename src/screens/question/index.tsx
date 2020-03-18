import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface QuestionScreenProp extends NavigationInterface {
  testID?: string;
}

export default function QuestionScreen(props: QuestionScreenProp) {
  return (
    <Container>
      <Button title="Question screen button" />
      <Welcome>Question Screen</Welcome>
    </Container>
  );
}
