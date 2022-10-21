import styled from "styled-components";
import {black, blue} from '../colors'



export const PokemonContent = styled.div`
 width: 100%;
 min-height: 500px;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 min-height: 100vh;
 @media screen and (max-width: 767px){
  margin-top: 5rem;
}
`;

export const Heading2 = styled.h2`
font-size: 4rem;
color: ${black};
font-weight: 700;
text-transform: uppercase;
`

export const PokemonCenterInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
min-height: inherit;
`

export const PokemonCenterInfoUl = styled.ul`
display: flex;
flex-wrap:wrap;
height: 80px;
width: 50%;
justify-content: center;
@media screen and (max-width: 767px){
 width: 100%;
}
`;

export const PokemonCenterInfoLi = styled.li`
height: inherit;
width: 180px;
margin: 0 2rem;
@media screen and (max-width: 767px){
  width: 100%;
  margin-top: 8px;
 }
`;

export const PokemonCenterInfoLiDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Heading6 = styled.span`
font-size: 1.5rem;
color: ${black};
font-weight: 500;
text-transform: uppercase;
`

export const MapLi = styled.li`
font-size: 0.9rem;
color: ${black};
font-weight: 400;
margin-top: 4px;
`

export const SpanContent = styled.li`
font-size: 0.9rem;
color: ${black};
font-weight: 400;
margin-top: 4px;
`

export const Img = styled.img`
height: 14rem;
`

export const BackBtn = styled.div`
    min-height: 50px;
    display: flex;
    justify-content: space-evenly;
    width: 170px;
    position: absolute;
    left: 3rem;
    top: 5rem;
    cursor: pointer;
    align-items: center;
    font-size: 1rem;
    color: ${blue};
    font-weight: 600;
    @media screen and (max-width: 767px){
      left: 0rem;
      top: -3.5rem;
    }
`;

export const FavoriteDivIcon = styled.div`
margin-top: 8px;
`