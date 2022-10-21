import HomePage from './home';
import PokemonPage from './PokemonPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {MainContent} from '../style'
import Favorite from './FavoritePage';

const Main = () => {
    
    return (
        <MainContent>
            <Router>
                <Routes>
                    <Route path="/Pokemon/" element={<HomePage />} />
                    <Route path="/Pokemon/pokemon/:name" element={<PokemonPage />} />
                    <Route path="/Pokemon/favorites" element={<Favorite />} />
                </Routes>
            </Router>
        </MainContent>
    )
}

export default Main;