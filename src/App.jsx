import './reset.css';
import './App.scss';
import { Nav } from "./components/SearchComponents/Nav"
import { CategorieDef } from "./components/SearchComponents/CategorieDef"
import { Result } from "./components/Result"
 
import { Routes, Route } from "react-router-dom"

export const App = () => {
    return (
        <Routes>
            <Route path="" element={<Nav />} />
            <Route path="result" element={<Result />} />
            <Route path="categorie" element={<CategorieDef />} />
        </Routes>
    );
}

export default App;