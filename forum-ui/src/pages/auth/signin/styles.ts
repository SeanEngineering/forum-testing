import styled, {keyframes, css} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  color: black;
  text-align: start;
  padding: 30px;
`
export const Half = styled.div`
  display:  flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const WelcomeText = styled.h1`
  padding: 0;
  margin: 0;
`
export const LogoWrapper = styled.div`
  margin-bottom: 100px;
`

export const LeftLayout = styled.div`
  display:  flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
`

export const DescriptionText = styled.p`
  color: gray;
`

export const InputWrapper = styled.div`
  display:  flex;
  flex-direction: column;
  gap: 15px;
`

export const HelperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: gray;
`

export const ButtonWrapper = styled.div`
  margin-top: 30px;
`

export const SignupWrapper = styled.div`
margin-top: 100px;
  color: gray;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LoginImage = styled.img<{ isVisible: boolean }>`
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 0.6s ease-in forwards;
    `}
`;

export const LoginImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 20px;
  scale: 0.9;
`