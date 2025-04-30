import {
  MonitorHeartOutlined,
  NotificationsOutlined,
  SafetyCheckOutlined,
} from '@mui/icons-material';
import { Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  StyledAppBar,
  StyledIconWrapper,
  StyledLogo,
  StyledLogoHeading,
} from './styles';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [value, setValue] = useState(6);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <StyledAppBar solid={isScrolled}>
      <StyledIconWrapper>
        <StyledLogo src={logo} />
        <StyledLogoHeading>journeyman</StyledLogoHeading>
      </StyledIconWrapper>
      <section>
        <Tabs value={value} onChange={handleChange} textColor='inherit'>
          <Tab label='Overview' value={1} />
          <Tab label='Courses' value={2} />
          <Tab label='Assignment' value={3} />
          <Tab label='Classmate' value={4} />
          <Tab label='Schedule' value={5} />
          <Tab label='Community' value={6} />
        </Tabs>
      </section>
      <StyledIconWrapper>
        <SafetyCheckOutlined />
        <MonitorHeartOutlined />
        <NotificationsOutlined />
      </StyledIconWrapper>
    </StyledAppBar>
  );
};

export default Navbar;
