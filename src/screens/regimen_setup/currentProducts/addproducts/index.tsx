import React from 'react';
import Modal from 'react-native-modal';

import { NavigationInterface } from '../../../types';
import { useThemeContext } from '../../../../theme';

import { ModalContainer, ModalTitle, ModalTitleProduct } from './styles';

interface SearchhProductScreenProp {
  testID?: string;
  isVisible: boolean;
  onBackdropPress(): void;
}

export default function SearchProductScreen(props: SearchhProductScreenProp) {
  const { colors, fonts } = useThemeContext();
  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={props.onBackdropPress}
      useNativeDriver={true}
      style={{ display: 'flex', justifyContent: 'flex-end', margin: 0 }}
    >
      <ModalContainer>
        <ModalTitle>add <ModalTitleProduct>shampoo</ModalTitleProduct></ModalTitle>
      </ModalContainer>
    </Modal>
  );
}
