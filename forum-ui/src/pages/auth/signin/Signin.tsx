import React from 'react';
import {
  ButtonWrapper,
  DescriptionText,
  Half,
  HelperWrapper,
  InputWrapper,
  LeftLayout,
  LoginImage,
  LoginImageWrapper,
  LogoWrapper,
  SignupWrapper,
  WelcomeText,
  Wrapper,
} from './styles';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
} from '@mui/material';
import {
  StyledIconWrapper,
  StyledLogo,
  StyledLogoHeading,
} from '../../../components/navbar/styles';
import logo from '../../../assets/logo.svg';
import loginImage from '../../../assets/loginImage.png';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Half>
        <LeftLayout>
          <LogoWrapper>
            <StyledIconWrapper>
              <StyledLogo src={logo} />
              <StyledLogoHeading>journeyman</StyledLogoHeading>
            </StyledIconWrapper>
          </LogoWrapper>
          <div>
            <WelcomeText>Hello,</WelcomeText>
            <WelcomeText>Welcome Back</WelcomeText>
          </div>
          <DescriptionText>
            Hey, welcome back to your special place
          </DescriptionText>
          <InputWrapper>
            <TextField label='Email or username' />
            <TextField label='Password' type='password' />
            <HelperWrapper>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label='Remember me'
                />
              </FormGroup>
              <Link>Forgot Password?</Link>
            </HelperWrapper>
          </InputWrapper>
          <ButtonWrapper>
            <Button variant='contained' onClick={() => navigate('/')}>
              Sign In
            </Button>
          </ButtonWrapper>
          <SignupWrapper>
            Don't have an account? <Link>Sign Up</Link>
          </SignupWrapper>
        </LeftLayout>
      </Half>
      <Half>
        <LoginImageWrapper>
          <LoginImage src={loginImage} isVisible={true} />
        </LoginImageWrapper>
      </Half>
    </Wrapper>
  );
};

export default Signin;
