import styled from "styled-components";
import BannerHome from "../../assets/banner-home.jpg"
import Background from "../../assets/background-fundo.svg"

export const Banner = styled.div`
background: url('${BannerHome}');
background-size: cover;
background-position: center;
height: 400px;

h1 {
  font-family: 'Road Rage', sans-serif;
  font-size: 80px;
  color: #ffffff;
  position: absolute;
  right: 20%;
  top: 10%;
  text-align: center;
}
  
`;

export const Container = styled.section`
background: 
  linear-gradient(
    rgba(255, 255, 255, 0.5), 
    rgba(255, 255, 255, 0.5)
  ),
  url('${Background}');
height: 500px;
`;


export const Content = styled.div`
  
`;

