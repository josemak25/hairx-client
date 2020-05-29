import React from 'react';
import GotTimeIcon from '../../../../assets/icons/got_time_icon';
import QuiteBusyIcon from '../../../../assets/icons/quite_busy_icon';

import {
  AnswerOption,
  AnswerOptionText,
  AnswerOptionDetailsHeader,
  AnswerOptionDetailsText
} from './styles';

interface TimeScheduleProps {
  title: string;
  detailsHeader: string;
  detailsText: string;
  index: number;
}

export default function TimeSchedule(props: TimeScheduleProps) {
  const Icon = props.index ? <GotTimeIcon /> : <QuiteBusyIcon />;

  return (
    <AnswerOption>
      <AnswerOptionText>{props.title}</AnswerOptionText>
      {Icon}
      <AnswerOptionDetailsHeader>
        {props.detailsHeader}
      </AnswerOptionDetailsHeader>
      <AnswerOptionDetailsText>{props.detailsText}</AnswerOptionDetailsText>
    </AnswerOption>
  );
}
