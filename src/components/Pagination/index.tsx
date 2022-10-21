import {useContext} from 'react'
import { DataContext } from "../../store";

import {PaginationContent, PaginationContentBtn} from '../../style/PaginationStyle'

const Pagination = () => {

    /*
        Here I get the total context data of pokemons per page use in an array to map this data and get all pages
        And used a function to capture the page the user clicked
    */


    const {
        totalPokemonsPerPage,
        handleClickPages
       } = useContext(DataContext);

    let numPage = []
    for(let i = 1; i <= totalPokemonsPerPage; i++){
        numPage.push(i)
    }
    return (
        <PaginationContent>
            {numPage.map((page, index) => {
                return (
                    <PaginationContentBtn key={index} onClick={() => handleClickPages(page)}>{page}</PaginationContentBtn>
                )
            })}
        </PaginationContent>
    )
}

export default Pagination