import Cards from '../../components/cards';
import {useContext} from 'react'
import { DataContext } from "../../store";
import {CentralizeContent, Container, FavoriteWarning} from '../../style'
import Header from '../../components/Header'

const Favorite = () => {

    const {
       favorite
       } = useContext(DataContext);

    return (
        <Container>
            <Header />
            <CentralizeContent>
                {favorite.length > 0? <Cards pokemons={favorite} /> : <FavoriteWarning>Not have any favorite added yet, Please add one to see in this Page</FavoriteWarning>}
            </CentralizeContent>
        </Container>
    )
}

export default Favorite