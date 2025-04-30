import React from 'react';
import {
  EndWrapper,
  IconWrapper,
  StartWrapper,
  StyledWrapper,
} from './TopBar.styled';
import { Avatar } from '@mui/material';
import { AccountBalance, CloseOutlined, Search } from '@mui/icons-material';

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

        <CloseOutlined />
      </EndWrapper>
    </StyledWrapper>
  );
};

export default TopBar;
