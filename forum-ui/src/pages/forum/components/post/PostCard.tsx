import { Avatar, Chip } from '@mui/material';
import React from 'react';
import {
  CardWrapper,
  FooterGroup,
  PostFooter,
  StyledOutterWrapper,
  StyledTitle,
  StyledTopBar,
  TagGroup,
} from './PostCard.styled';
import { ForumOutlined, VisibilityOutlined } from '@mui/icons-material';

const PostCard = () => {
  return (
    <CardWrapper>
      <StyledOutterWrapper>
        <StyledTopBar>
          <Avatar>H</Avatar>
          <p>By: Mikey Jonah</p>
        </StyledTopBar>
        <i>2d ago</i>
      </StyledOutterWrapper>
      <StyledTitle>This is a title</StyledTitle>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
        veritatis ducimus totam? Facere hic pariatur perferendis vel at delectus
        autem labore ipsam? Fugit labore doloribus reprehenderit nulla?
        Cupiditate, explicabo ipsum! Quia totam accusamus illo enim placeat.
        Repellendus quisquam cumque vel placeat praesentium? Sunt quibusdam,
        explicabo blanditiis quam cupiditate optio! Similique fuga animi nam
        molestiae blanditiis ratione, doloribus voluptatem perferendis
        veritatis?
      </p>
      <TagGroup>
        <Chip label='study-group' />
        <Chip label='help-question' />
        <Chip label='study-group' />
      </TagGroup>
      <PostFooter>
        <FooterGroup>
          <ForumOutlined />
          28 replies
        </FooterGroup>
        |
        <FooterGroup>
          <VisibilityOutlined />
          28 Views
        </FooterGroup>
      </PostFooter>
    </CardWrapper>
  );
};

export default PostCard;
