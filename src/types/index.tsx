import { ReactNode } from "react";



// Decide to create a general file for the types and import them where needed.


export interface AppContextInterface {
  handleClickPages(c: any): void;
  pokemonsPerPage: number;
  setPokemonsPerPage: (c: number) => void;
  pokemons: responseTypes[];
  totalPokemonsPerPage: number;
  addFavotirePokemons(c: any, e: any): void;
  removeFavotirePokemons(c: any): void;
  favorite: any[]
}
export interface Props {
  children: ReactNode;
}

export interface responseTypes {
  name: string;
  sprites: {
    front_default: string;
  }
}

export interface PokemonsCards {
    pokemons: responseTypes[];
}

export interface changeStateBoolean {
  changeState: boolean;
  setChangeState: (newState: boolean) => void;
}

export interface LocationState {
  state: {
    name: string;
    sprites: {
        front_default: string;
    }
    weight: number;
    height: number;
    abilities: abilitiesTypes[]
    base_experience: number;
    moves: any[]
    types: pokemonType[]
  };
}

export interface abilitiesTypes {
    ability: {
        name: string;
    }
}

export interface pokemonType {
    type: {
        name: string;
    }
}




