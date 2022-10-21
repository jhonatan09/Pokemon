import { createContext, useState, useEffect } from "react";
import { AppContextInterface, Props, responseTypes } from "../types";

import api from "../services/api";

const DataContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

function DataContextProvider({ children }: Props) {
  const [data, setData] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(20)


  const lastIndex = currentPage * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;
  
  const [pokemons, setPokemons] = useState<responseTypes[]>([]);

  const totalPokemonsNumber = data.length;

  const totalPokemonsPerPage = Math.ceil(totalPokemonsNumber/pokemonsPerPage)

  const [favorite, setFavorite] = useState<any[]>([]);

  const getAllPokemons = async () => {

 const arr =  await api.get(`pokemon?limit=100000&offset=0.`).then((response) => {
        return response.data.results
       });
       const pokemonObject = (result: any) =>{
            result.map( async(pokemon: any) => {
               
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()

                setData( currentData => [...currentData, data])
            });
       }
       pokemonObject(arr)
   }

   useEffect(() => {
    getAllPokemons()
  }, []);

   const slicePokemonsPerPage = () => {
    const items =  data.slice(firstIndex, lastIndex)
    setPokemons(items)
   }

   useEffect(() => {
    slicePokemonsPerPage();
  }, [currentPage, data]);


  let Localdatas: any = localStorage.getItem('@Favorite');
  let dadosArr: any[] = JSON.parse(Localdatas)
  

useEffect(() => {
  if(Localdatas != null){
    setFavorite(dadosArr)
  }

},[])

const createNewLocalStorageData = () => {
  localStorage.setItem('@Favorite', JSON.stringify(favorite));
}



 const addFavotirePokemons = ( item: any, name: string) => {
  const findName = favorite.filter(a => a.name === name )
    
    if(findName.length === 0){
      setFavorite(currentArr => [...currentArr, item])
      localStorage.removeItem('@Favorite');
    }
 }

 const removeFavotirePokemons = (  name: string) => {
  const newArr = favorite.filter(item => {
      return item.name !== name
  } )
    setFavorite(newArr)
    
 }

  
 useEffect(() => {
  createNewLocalStorageData()
}, [favorite]);

  const handleClickPages = (numberPage: number) => {
    setCurrentPage(numberPage)
  };



  return (
    <DataContext.Provider
      value={{
        handleClickPages,
        pokemonsPerPage,
        setPokemonsPerPage,
        pokemons,
        totalPokemonsPerPage,
        addFavotirePokemons,
        removeFavotirePokemons,
        favorite
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };