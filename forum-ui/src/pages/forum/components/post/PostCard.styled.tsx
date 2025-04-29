import { Card } from '@mui/material';
import styled from 'styled-components';

export const StyledTopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledOutterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const CardWrapper = styled(Card)`
  padding: 10px 20px;
  text-align: start;
`;

export const StyledTitle = styled.h4``;

export const TagGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const FooterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
