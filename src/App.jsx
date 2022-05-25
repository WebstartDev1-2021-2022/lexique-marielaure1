import './reset.css';
import './App.scss';
import { Nav } from "./components/SearchComponents/Nav"
import { CategorieDef } from "./components/SearchComponents/CategorieDef"
import { Definition } from "./components/Definition"
 
import { Routes, Route } from "react-router-dom"

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="definition" element={<Definition />} />
            <Route path="categorie" element={<CategorieDef />} />
        </Routes>
    );
}

export default App;