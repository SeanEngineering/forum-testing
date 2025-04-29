import { Card } from '@mui/material';
import styled from 'styled-components';

export const StyledPostWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  padding: 20px;
`;

export const StyledDescription = styled.p`
  margin: 0px;
  padding: 0px;
`;

export const StyledPostTitle = styled.h4`
  margin: 0px;
  padding: 0px;
  margin-bottom: 10px;
`;

export const StyledBottomWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 10px;
`;
