import React from 'react';
import {
  StyledWrapper,
  VerticalAttachmentIcon,
  WideWrapper,
} from './PostBar.styled';
import { EmojiEmotionsOutlined, ImageOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

const PostBar = () => {
  return (
    <WideWrapper>
      <StyledWrapper>
        <EmojiEmotionsOutlined />
        <ImageOutlined />
        <VerticalAttachmentIcon />
      </StyledWrapper>
      <Button variant='contained'>Post</Button>
    </WideWrapper>
  );
};

export default PostBar;
