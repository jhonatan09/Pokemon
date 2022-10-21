import Cards from '../../components/cards';
import {useContext} from 'react'
import { DataContext } from "../../store";
import Pagination from '../../components/Pagination'
import {CentralizeContent, Container} from '../../style'
import Header from '../../components/Header'

const Home = () => {

    const {
       pokemons
        } = useContext(DataContext);  // My initial idea was to pass the array as props because, I would create an input to search where I could directly search for the desired pokemon. But unfortunately I didn't have time to do that extra. However this helped in Favorites where I can pass the favorites array straight to the Cards component

    return (
        <Container>
            <Header />
             <CentralizeContent>
                <Cards pokemons={pokemons} />
            </CentralizeContent>
            <Pagination />
        </Container>
    )
}

export default Home