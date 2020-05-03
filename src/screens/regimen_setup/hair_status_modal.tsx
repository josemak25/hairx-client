import React, { useState } from 'react';
import Modal from 'react-native-modal';
import WheelPicker from 'react-native-wheely';

import { useThemeContext } from '../../theme';

import { ModalView, ModalHairType, ModalHairTypeDuration } from './styles';

interface HairStatusModalProps {
  testID?: string;
  isVisible: boolean;
  onBackdropPress(): void;
}

const wheelPickerData = [
  'Less than a month ago',
  '3 months ago',
  '6 months ago',
  '9 months ago',
  'Over 1 year ago'
];

export default function HairStatusModal(props: HairStatusModalProps) {
  const { colors, fonts } = useThemeContext();

  const [state, setState] = useState({
    selectedItem: '6 months ago',
    itemList: wheelPickerData
  });

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
          itemTextStyle={{
            color: colors.FONT_DARK_COLOR,
            fontSize: fonts.LARGE_SIZE + 5,
            fontFamily: fonts.JOST_BOOK
          }}
          itemStyle={{ backgroundColor: colors.BG_WHITE_COLOR }}
          selectedIndicatorStyle={{ backgroundColor: colors.BG_WHITE_COLOR }}
          itemHeight={50}
        />
      </ModalView>
    </Modal>
  );
}
