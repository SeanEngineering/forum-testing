import { AppBar } from "@mui/material";
import styled from "@emotion/styled";

export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 5%;
`
export const StyledLogo = styled.img`
  height: 30px;
  width: 30px;
`
export const StyledLogoHeading = styled.h5`
  margin: 0px;
  padding: 0px;
  font-size: x-large;
  font-weight: bolder;
`

export const StyledAppBar = styled(AppBar)<{ solid: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  background: ${({ solid }) => (solid ? 'black' : 'rgba(43, 10, 61, 0.5)')};
  transition: 0.5s ease;
`;