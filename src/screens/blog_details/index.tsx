import React from 'react';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, Welcome } from './styles';

interface BlogDetailScreenProp extends NavigationInterface {
  testID?: string;
}

export default function BlogDetailScreen(props: BlogDetailScreenProp) {
  return (
    <Container>
      <Button title="Blog details screen button" />
      <Welcome>Blog Details Screen</Welcome>
    </Container>
  );
}
