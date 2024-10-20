import styled from "styled-components";

export const Container = styled.div `
.carousel-item{
    padding: 40px;
}


`

export const Title = styled.h2 `
font-size: 32px;
color: #9758a6;
font-weight: 800;
padding-bottom: 12px;
position: relative;
text-align: center;
margin-bottom: 40px;
padding-top: 20px;

&::after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    left: calc(50% - 28px);
}

`

export const ContainerItems = styled.div `
background: url('${props => props.imgUrl}');
background-position: center;
background-size: cover;
display: flex;
align-items: center;
padding: 20px 10px;
width: 100%;
height: 200px;
border-radius: 20px;

p{
    color: #fff;
    background-color: rgba(0,0,0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 50px;
}
`