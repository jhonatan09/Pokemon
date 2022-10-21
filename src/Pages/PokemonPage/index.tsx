import { useLocation, useNavigate } from "react-router-dom";
import {LocationState} from '../../types'
import { FaArrowCircleLeft, FaHeart } from "react-icons/fa";
import {useContext} from 'react'
import { DataContext } from "../../store";

import {PokemonContent, Heading2, PokemonCenterInfo, PokemonCenterInfoUl, PokemonCenterInfoLi, PokemonCenterInfoLiDiv, Heading6, MapLi, SpanContent, Img, BackBtn, FavoriteDivIcon} from '../../style/PokemonPageStyle'
import {StyleFavoriteIconCurso} from '../../style';

const PokemonPage = () => {
    const location = useLocation();
    const { state } = location as LocationState;

    const navigate = useNavigate();

    const {
        addFavotirePokemons,
        removeFavotirePokemons,
        favorite
       } = useContext(DataContext);

       const findName = favorite.filter(a => a.name === state.name )

   const abilities =  state.abilities.map((item, index) => {
        return (
            <MapLi key={index}>
                {item.ability.name}
            </MapLi>
        )
    })

    const types =  state.types.map((item, index) => {
        return (
            <MapLi key={index}>
                {item.type.name}
            </MapLi>
        )
    })
    return (
        <PokemonContent>
            <BackBtn onClick={() => {
                navigate("/")
            }}>
                <FaArrowCircleLeft size={50}/>
                Go to home
            </BackBtn>
            <PokemonCenterInfo>
                <Heading2>
                    {state.name}
                </Heading2>
                <Img src={state.sprites.front_default} alt={state.name} />
                <PokemonCenterInfoUl>
                    <PokemonCenterInfoLi>
                        <PokemonCenterInfoLiDiv>
                            <Heading6>Height:</Heading6>
                            <SpanContent> {state.height}</SpanContent>
                        </PokemonCenterInfoLiDiv>
                    </PokemonCenterInfoLi>
                    <PokemonCenterInfoLi>
                        <PokemonCenterInfoLiDiv>
                            <Heading6>weight:</Heading6>
                            <SpanContent> {state.weight}</SpanContent>
                        </PokemonCenterInfoLiDiv>
                    </PokemonCenterInfoLi>
                    <PokemonCenterInfoLi>
                        <PokemonCenterInfoLiDiv>
                            <Heading6>experience:</Heading6>
                            <SpanContent> {state.base_experience}</SpanContent>
                        </PokemonCenterInfoLiDiv>
                    </PokemonCenterInfoLi>
                    <PokemonCenterInfoLi>
                        <PokemonCenterInfoLiDiv>
                            <Heading6>Types:</Heading6>
                            <ul>
                                {types}
                            </ul>
                        </PokemonCenterInfoLiDiv>
                    </PokemonCenterInfoLi>
                    <PokemonCenterInfoLi>
                        <PokemonCenterInfoLiDiv>
                            <Heading6>Total Moves:</Heading6>
                            <SpanContent>{state.moves?.length}</SpanContent>
                        </PokemonCenterInfoLiDiv>
                    </PokemonCenterInfoLi>
                    <PokemonCenterInfoLi>
                        <PokemonCenterInfoLiDiv>
                            <Heading6>Abilities:</Heading6>
                            <ul>
                                {abilities}
                            </ul>
                        </PokemonCenterInfoLiDiv>
                    </PokemonCenterInfoLi>
                    <PokemonCenterInfoLi>
                        <PokemonCenterInfoLiDiv>
                            <Heading6>Favorite:</Heading6>
                            <FavoriteDivIcon>
                                {findName.length === 0 ? <StyleFavoriteIconCurso onClick={() => addFavotirePokemons(state, state.name)}><FaHeart color='#c7c7c7' size={30}/></StyleFavoriteIconCurso>: <StyleFavoriteIconCurso onClick={() => removeFavotirePokemons(state.name)}> <FaHeart color='red' size={40}/></StyleFavoriteIconCurso>}
                            </FavoriteDivIcon>
                        </PokemonCenterInfoLiDiv>
                    </PokemonCenterInfoLi>
                </PokemonCenterInfoUl>
            </PokemonCenterInfo>
        </PokemonContent>
    )
}

export default PokemonPage