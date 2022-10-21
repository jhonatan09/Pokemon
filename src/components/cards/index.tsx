import {useContext} from 'react'
import { DataContext } from "../../store";
import {PokemonsCards} from '../../types'
import {CardsContent, Img, NavbarLink,} from '../../style/CardsStyle';
import {StyleFavoriteIconCurso} from '../../style';
import { FaHeart } from "react-icons/fa";


const Cards = ({pokemons}: PokemonsCards) => {

    const {
        addFavotirePokemons,
        removeFavotirePokemons,
        favorite
       } = useContext(DataContext);
   
       
      const pokemonCard = pokemons.map((item, index) => {
        const findName = favorite.filter(a => a.name === item.name )

        
        return (
            <CardsContent key={index}>
                <NavbarLink to={`/pokemon/${item.name}`} state={item}>
                    <Img src={item.sprites.front_default} alt={item.name}/>
                    <span>{item.name}</span>
                </NavbarLink>
                {findName.length === 0 ? <StyleFavoriteIconCurso onClick={() => addFavotirePokemons(item, item.name)}><FaHeart color='#c7c7c7' size={30}/></StyleFavoriteIconCurso>: <StyleFavoriteIconCurso onClick={() => removeFavotirePokemons(item.name)}> <FaHeart color='red' size={40}/></StyleFavoriteIconCurso>}
                
            </CardsContent>
        )
      })
    return (
        <>
        {pokemonCard}
        </>
    )
}

export default Cards