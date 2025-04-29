import React from 'react';
import { Box, Card, Tab, Tabs } from '@mui/material';
import CommunityCard from './components/communityCard/CommunityCard';
import TabPanel from './components/tabPanel/TabPanel';
import { VerticalAttachmentIcon } from './components/postBar/PostBar.styled';
import { LabelWrapper } from './components/tabPanel/styles';
import { CommentBankOutlined, ForumOutlined } from '@mui/icons-material';
import Posts from './sections/posts/Posts';

const Forum = () => {
  const [value, setValue] = React.useState(0);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CommunityCard />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label={
                <LabelWrapper>
                  <ForumOutlined sx={{ height: 20 }} /> Post
                </LabelWrapper>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <LabelWrapper>
                  <CommentBankOutlined sx={{ height: 20 }} />
                  Discussion
                </LabelWrapper>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <LabelWrapper>
                  <VerticalAttachmentIcon sx={{ height: 20 }} />
                  Resources
                </LabelWrapper>
              }
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Posts />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Card>
  );
};

export default Forum;
