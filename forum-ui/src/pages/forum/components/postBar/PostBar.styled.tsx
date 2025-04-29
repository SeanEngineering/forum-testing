import { AttachmentOutlined } from '@mui/icons-material';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const VerticalAttachmentIcon = styled(AttachmentOutlined)`
  transform: rotate(90deg);
`;

export const WideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: lightgray;
  padding: 10px 20px;
`;
