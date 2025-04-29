import React from 'react';
import {
  EndWrapper,
  IconWrapper,
  StartWrapper,
  StyledWrapper,
} from './TopBar.styled';
import { Avatar } from '@mui/material';
import { AccountBalance, CoronavirusSharp, Search } from '@mui/icons-material';

const TopBar = () => {
  return (
    <StyledWrapper>
      <StartWrapper>
        <IconWrapper>
          <AccountBalance htmlColor='red' />
        </IconWrapper>
        <h2>Community</h2>
      </StartWrapper>
      <EndWrapper>
        <Avatar>
          <Search />
        </Avatar>
        <Avatar sx={{ color: 'blue' }}>
          <CoronavirusSharp />
        </Avatar>
      </EndWrapper>
    </StyledWrapper>
  );
};

export default TopBar;
