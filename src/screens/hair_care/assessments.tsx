import React, { Fragment } from 'react';
import { useThemeContext } from '../../theme';

import {
  AssessmentCardContainer,
  AssessmentCard,
  ContentLabel,
  ContentValue,
  ValueDegreeContainer,
  ValueDegree,
  AssessmentLabel
} from './styles';

type AssessmentType = {
  label: string;
  value: string;
  degree: string;
};

interface AssessmentsProp {
  testID?: string;
  assessments: AssessmentType[];
}

export default function Assessments({ assessments }: AssessmentsProp) {
  const { colors } = useThemeContext();

  return (
    <Fragment>
      {assessments.length && <AssessmentLabel>Hair assessment</AssessmentLabel>}

      <AssessmentCardContainer
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {assessments.map((assessment, index) => (
          <AssessmentCard key={index}>
            <ContentLabel>{assessment.label}</ContentLabel>
            <ContentValue>{assessment.value}</ContentValue>
            <ValueDegreeContainer
              style={
                assessment.value.toLowerCase() === 'low' && {
                  backgroundColor: colors.BG_LIGHT_PINK_COLOR
                }
              }
            >
              <ValueDegree
                style={
                  assessment.value.toLowerCase() === 'low' && {
                    color: colors.BG_RED_COLOR
                  }
                }
              >
                {assessment.degree}
              </ValueDegree>
            </ValueDegreeContainer>
          </AssessmentCard>
        ))}
      </AssessmentCardContainer>
    </Fragment>
  );
}
