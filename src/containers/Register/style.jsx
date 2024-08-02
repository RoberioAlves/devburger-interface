import styled from 'styled-components';
import BackgroundLogin from '../../assets/bg 1.svg';
import Background from '../../assets/Padrão 1.svg';
import { Link as ReactLink } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  background: url('${Background}');
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 50%;
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: #9758a6;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    color: #ffffff;
  }

  p {
    padding: 10px;
    font-size: 14px;
    line-height: 80%;
    color: #f70101;
    font-weight: 600;
    height: 10px;
  }
`;

export const ContainerLink = styled.div`
  display: flex;
  justify-content: end;
  color: #ffffff;
  gap: 5px;
  font-size: 15px;
  text-decoration: none;
  &:hover {
      color: red;
  }    
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: red;
  }
`;