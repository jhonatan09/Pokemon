import Cards from '../../components/cards';
import {useContext} from 'react'
import { DataContext } from "../../store";
import {CentralizeContent, Container} from '../../style'
import Header from '../../components/Header'

const Favorite = () => {

    const {
       favorite
       } = useContext(DataContext);

    return (
        <Container>
            <Header />
            <CentralizeContent>
                <Cards pokemons={favorite} />
            </CentralizeContent>
        </Container>
    )
}

export default Favorite