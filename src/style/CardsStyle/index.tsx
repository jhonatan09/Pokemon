import styled from "styled-components";
import {black, colorCard} from '../colors'
import {Link} from "react-router-dom";


export const CardsContent = styled.div`
  width: 350px;
  height: 350px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${colorCard};
  margin-bottom: 1rem;
  border: 2px solid ${black};
border-radius: 10px;
`;

export const NavbarLink = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
flex-direction: column;
align-items:center;
color: ${black};
font-size: 1.7rem;
font-weight: 600;
width: inherit;
height: 280px;
`;

export const Img = styled.img`
height: 10rem;
`;