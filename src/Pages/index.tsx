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
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Pokemon/pokemon/:name" element={<PokemonPage />} />
                    <Route path="/favorites" element={<Favorite />} />
                </Routes>
            </Router>
        </MainContent>
    )
}

export default Main;