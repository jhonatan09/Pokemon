import styled from "styled-components";
import {black, red} from '../colors'


export const Logo = styled.img`
height: 28rem;
width: 59%;
@media screen and (max-width: 767px){
  width: 100%;
}
`;

export const HeaderCentralize = styled.div`
 text-align: center;
 margin-bottom: 2rem;
`;

export const HeaderContent = styled.div`
display: flex;
width: 100%;
justify-content: center;
`;
export const HeaderContentNav = styled.div`
margin: 0 3rem;
font-size: 2rem;
color: ${black};
background: ${red};
border-radius: 15px;
padding: 1rem;
border: 1px solid ${black};
cursor: pointer;
&:hover{
  opacity: 0.7;
}
@media screen and (max-width: 767px){
  font-size: 1.5rem;
  margin: 0 1rem;
}
`;