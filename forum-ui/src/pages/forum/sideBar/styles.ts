import { Card } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  width: 100%;
  text-align: start;
  padding: 10px;
`
export const StyledHeading = styled.h4`
  margin: 5px;
`
export const ChipWrapper= styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
export const FollowCardNameText = styled.div`
  font-weight: bold;
`
export const FollowCardDesc = styled.div`
  color: gray;
`
export const FollowCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
export const PersonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
`