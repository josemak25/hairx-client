import React, { Fragment } from 'react';

import {
  RecommendationContainer,
  RecommendationView,
  Recommendation,
  RecommendationFrequency,
  AssessmentLabel
} from './styles';

interface RecommendationsProp {
  testID?: string;
  recommendations: { text: string; frequency: string }[];
}

export default function Recommendations({
  recommendations
}: RecommendationsProp) {
  return (
    <Fragment>
      {recommendations.length && (
        <AssessmentLabel>Recommendations</AssessmentLabel>
      )}

      <RecommendationContainer>
        {recommendations.map((recommendation, index) => (
          <RecommendationView key={index}>
            <Recommendation>{recommendation.text}</Recommendation>
            <RecommendationFrequency>
              {recommendation.frequency}
            </RecommendationFrequency>
          </RecommendationView>
        ))}
      </RecommendationContainer>
    </Fragment>
  );
}
