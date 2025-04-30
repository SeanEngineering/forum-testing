import React from 'react';
import Forum from '../forum/Forum';
import TopDiscussions from '../forum/sideBar/TopDiscussions';
import { HomeLayout } from './styles';
import RecommendedTopics from '../forum/sideBar/RecommendedTopics';
import PeopleToFollow from '../forum/sideBar/PeopleToFollow';

const Home = () => {
  return (
    <HomeLayout>
      <Forum />
      <section
        style={{
          width: '100%',
          gap: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TopDiscussions />
        <RecommendedTopics />
        <PeopleToFollow />
      </section>
    </HomeLayout>
  );
};

export default Home;
