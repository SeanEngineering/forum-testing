import React from 'react';
import { ChipWrapper, StyledCard, StyledHeading } from './styles';
import { Button, Chip } from '@mui/material';

const RecommendedTopics = () => {
  const topics = [
    'Programming',
    'Copywriting',
    'Machine learning',
    'Productivity',
  ];
  return (
    <StyledCard>
      <StyledHeading>Recommended Topics</StyledHeading>
      <ChipWrapper>
        {topics.map((t) => (
          <Chip key={t} label={t} />
        ))}
      </ChipWrapper>
      <Button variant='text'>See more topics</Button>
    </StyledCard>
  );
};

export default RecommendedTopics;
