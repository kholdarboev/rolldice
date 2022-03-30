import styled from 'styled-components';

export const Container = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0 100px;
`
export const Dice = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export const Button = styled.button`
cursor: pointer;
padding: 20px 80px;
border: none;
border-radius: 15px;
font-size: 20px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif cursive;
background-color: cadetblue;
opacity: .7;
color: whitesmoke;
:hover{
   background-color: cadetblue ;
   opacity: 1;
}
:active{
    transform: scale(.99);
}
`
export const H1 = styled.h1`
font-size: 4rem;
color:lightseagreen;
margin:0 0 30px;
`
export const Players = styled.div`
display: flex;
justify-content: center;
width: 100%;
`
export const P = styled.p`
padding: 0 40px;
font-size: 2rem;
margin: 50px 0 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: lightseagreen;
font-weight:bold;
`
export const RollDies = styled.div`
display: flex;
`
export const Parag = styled.input`
text-align: center;
font-weight:bold;
font-size: 18px;
color: white;
border: none;
border-radius: 30px;
padding: 10px 0;
background-color: lightseagreen;
outline: none;
opacity: .8;
:hover{
    opacity: 1;
}
cursor: pointer;
`