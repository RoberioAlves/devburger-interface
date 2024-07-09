import styled from 'styled-components';
import BackgroundLogin from '../../assets/bg 1.svg';
import Background from '../../assets/Padrão 1.svg';

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
  color: #ffffff;

  span {
    font-family: 'Road Rage', sans-serif;
    color: #9758a6;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  pad: 5px;
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
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: end;
  color: #ffffff;
  gap: 5px;

  a {
    color: #ffffff;
    font-size: 15px;
    text-decoration: none;
    &:hover {
      color: red;
    }
  }
  
`;
