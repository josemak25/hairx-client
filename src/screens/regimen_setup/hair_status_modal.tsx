import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
// import { WheelPicker } from 'react-native-wheel-picker-android';
// import Picker from 'react-native-wheel-picker';
import WheelPicker from 'react-native-wheely';

import { useThemeContext } from '../../theme';

import { ModalView, ModalHairType, ModalHairTypeDuration } from './styles';

interface HairStatusModalProps {
  testID?: string;
  isVisible: boolean;
  onBackdropPress(): void;
}

// let PickerItem = Picker.Item;

const wheelPickerData = [
  's',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday'
];

export default function HairStatusModal(props: HairStatusModalProps) {
  const { colors, fonts } = useThemeContext();

  const [state, setState] = useState({
    selectedItem: 'tuesday',
    initPosition: 4,
    hideIndicator: true,
    itemList: wheelPickerData
  });

  const onItemSelected = selectedItem => {
    setState({ ...state, selectedItem });
  };

  const onPickerSelect = index => {
    setState({ ...state, selectedItem: index });
  };

  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={props.onBackdropPress}
      style={{ display: 'flex', justifyContent: 'flex-end', margin: 0 }}
    >
      <ModalView style={{ justifyContent: 'flex-start' }}>
        <ModalHairType>Coloured hair</ModalHairType>
        <ModalHairTypeDuration>How long ago?</ModalHairTypeDuration>
        <WheelPicker
          options={wheelPickerData}
          selected={state.selectedItem}
          onChange={hair => setState({ ...state, selectedItem: hair })}
        />
      </ModalView>
    </Modal>
  );
}
