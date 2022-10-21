import styled from "styled-components";
import {black, white, green, red} from './colors'


// I put the general style here and for more specific i was created paths with files styles

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

export const CentralizeContent = styled.div`
  width: 90%;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  margin: 0 auto;
  border-top: none;
  border-bottom: none;
  margin-bottom: 5rem;
  padding: 0 8px;
`;

export const MainContent = styled.div`
  width: 100%;
  background-image: linear-gradient( ${white} 35%, ${green} 65%);
`;


export const Heading2 = styled.h2`
font-size: 4rem;
color: ${black};
font-weight: 700;
`



export const StyleFavoriteIconCurso = styled.span`
cursor: pointer;
`;


export const FavoriteWarning = styled.span`
  font-size: 5rem;
  font-weight: 600;
  color: ${red};
  text-transform: uppercase;
  width: 100%;
  text-align:center;
  margin: 6rem 1rem 16rem;
  @media screen and (max-width: 767px){
    font-size: 3rem;
    margin: 6rem 1rem 15rem;
  }
`;


