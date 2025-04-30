import React, { ReactNode } from 'react';
import { StyledCard, StyledHeading } from './styles';
import { ArrowRightRounded } from '@mui/icons-material';

const TopDiscussions = () => {
  return (
    <StyledCard>
      <StyledHeading>Top discussions this week 🔥</StyledHeading>
      <DetailBlock details='test link' link='/' />
      <DetailBlock details='lorem' link='/' />
      <DetailBlock details='lorem' link='/' />
    </StyledCard>
  );
};

interface DetailBlockProps {
  details: ReactNode;
  link: string;
}
const DetailBlock = ({ details, link }: DetailBlockProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ color: 'gray' }}>{details}</p>
      <a
        href={link}
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        Details <ArrowRightRounded />
      </a>
    </div>
  );
};
export default TopDiscussions;
