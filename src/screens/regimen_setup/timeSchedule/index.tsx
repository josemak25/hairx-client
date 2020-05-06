import React, { useState } from 'react';
import { useThemeContext } from '../../../theme';
import {
  AnswerOption,
  AnswerOptionText,
  AnswerOptionDetailsHeader,
  AnswerOptionDetailsText
} from './styles';
import boxShadow from '../../../utils/boxShadows';
import GotTimeIcon from '../../../../assets/icons/got_time_icon';
import quiteBusyIcon from '../../../../assets/icons/quite_busy_icon';
import { IconProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';

interface TimeScheduleProps {
  title: string;
  detailsHeader: string;
  detailsText: string;
  selected: boolean;
  // handleOnPress: void;
}

export default function TimeSchedule(props: TimeScheduleProps) {
  const { colors } = useThemeContext();

  const [selectedOption, setSelectedOption] = useState(false);

  const select = () => {
    setSelectedOption(true);
  };

  const deselect = () => {
    setSelectedOption(false);
  };

  return (
    <AnswerOption
      style={{
        backgroundColor: selectedOption
          ? colors.BG_LIGHT_GOLD_COLOR
          : colors.BUTTON_LIGHT_COLOR
      }}
      onPress={selectedOption ? deselect : select}
    >
      <AnswerOptionText>{props.title}</AnswerOptionText>
      <GotTimeIcon />
      <AnswerOptionDetailsHeader>
        {props.detailsHeader}
      </AnswerOptionDetailsHeader>
      <AnswerOptionDetailsText>{props.detailsText}</AnswerOptionDetailsText>
    </AnswerOption>
  );
}
