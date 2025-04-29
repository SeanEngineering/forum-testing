import React from 'react';
import TopBar from '../topBar/TopBar';
import { Card, Chip } from '@mui/material';
import { Add } from '@mui/icons-material';
import {
  StyledBottomWrapper,
  StyledDescription,
  StyledPostTitle,
  StyledPostWrapper,
} from './CommunityCard.styled';
import PostBar from '../postBar/PostBar';

const CommunityCard = () => {
  return (
    <Card>
      <TopBar />
      <hr color='lightgray' />
      <StyledPostWrapper>
        <StyledPostTitle>Hey everyone 😀</StyledPostTitle>
        <StyledDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          consequuntur numquam fuga quaerat pariatur? Nisi optio ea voluptatibus
          unde esse, fugit, quis, maiores eos asperiores delectus fuga ut
          laborum error. Id repellat debitis eveniet odio ipsum? Rerum atque,
          earum asperiores amet eius ut eligendi quos autem dolor in cumque quis
          voluptate dolorum ea maxime quam, iusto, obcaecati quia! Sed, eum!
          Aliquam, a eos. Doloremque ut quasi hic earum, amet iste officiis quae
          magnam vel ratione nobis facilis assumenda in, nam rerum quibusdam
          maxime! Sequi eveniet nemo, aliquid recusandae eos veritatis! Sequi
          consequuntur error corrupti reiciendis commodi? Et, tempore! Culpa
          vero excepturi architecto perferendis omnis maxime natus, consequatur
          cupiditate nostrum optio consequuntur nulla harum molestias nesciunt
          fugiat soluta sed sit vitae. Id itaque pariatur laboriosam deleniti,
          soluta iste nam numquam. Nostrum vel voluptatibus accusamus eligendi
          dolorem mollitia aspernatur earum in accusantium, numquam saepe
          expedita eveniet labore excepturi consequatur assumenda cupiditate
          distinctio!
        </StyledDescription>
        <StyledBottomWrapper>
          <Chip label='study-group' />
          <Chip label='help-question' />
          <Chip label='study-group' />
          <Chip
            icon={<Add />}
            label='Add Tags'
            variant='outlined'
            onClick={() => console.log('clicked')}
          />
        </StyledBottomWrapper>
      </StyledPostWrapper>
      <PostBar />
    </Card>
  );
};

export default CommunityCard;
