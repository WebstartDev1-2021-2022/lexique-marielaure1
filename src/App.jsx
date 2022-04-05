import './reset.css';
import './App.scss';
import { Home } from "./components/Home"
// import { Results } from "./components/Result"

// import { Routes, Route } from "react-router-dom"

export const App = () => {
    return (
        <Home/>
        // <Routes>
            // <Route path="" element={<Home />}
            // <Route path="result" element={<Result />}
        // </Routes>
    );
}

export default App;



// ACCUEIL
{/* <header className="accueil">
          <SearchInput/>
            <img src="images/Logo1.svg" alt=""/>
            <h2>Définitions dans l’univers du Design sous toutes ses formes</h2>
            <p className="choicePlanet">Choisi une planète</p>
            <div className="planets">
                <a href=""><img src="images/planet-pratique.svg" alt="" /></a>
                <a href=""><img src="images/planet-impression.svg" alt="" /></a>
                <a href=""><img src="images/planet-digital.svg" alt="" /></a>
            </div>
        </header> */}