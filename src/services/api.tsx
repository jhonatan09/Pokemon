import axios from "axios";

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});


export default api;


// I decided to separate the beginning of the api from the rest of the path, 
// in case I decide to reuse this initial path to collect another api endpoint