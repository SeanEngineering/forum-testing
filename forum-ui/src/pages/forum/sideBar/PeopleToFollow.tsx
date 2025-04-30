import React from 'react';
import {
  FollowCardDesc,
  FollowCardNameText,
  FollowCardWrapper,
  PersonWrapper,
  StyledCard,
  StyledHeading,
} from './styles';
import { Avatar, Button, Chip } from '@mui/material';

const PeopleToFollow = () => {
  return (
    <StyledCard>
      <StyledHeading>People to follow</StyledHeading>
      <FollowCard name='Sean' description='Talks about software' />
      <FollowCard name='Sean' description='Talks about software' />
      <FollowCard name='Sean' description='Talks about software' />
      <Button variant='text'>See more suggestions</Button>
    </StyledCard>
  );
};

interface FollowCardProps {
  name: string;
  description: string;
}

const FollowCard = ({ name, description }: FollowCardProps) => {
  return (
    <FollowCardWrapper>
      <PersonWrapper>
        <Avatar>{name.slice(0, 1)}</Avatar>
        <section>
          <FollowCardNameText>{name}</FollowCardNameText>
          <FollowCardDesc>{description}</FollowCardDesc>
        </section>
      </PersonWrapper>
      <Chip label='Follow' clickable variant='outlined' />
    </FollowCardWrapper>
  );
};

export default PeopleToFollow;
