import './reset.css';
import './App.scss';
import { Home } from "./components/SearchComponents/Search"
import { Result } from "./components/Result"

import { Routes, Route } from "react-router-dom"

export const App = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="result" element={<Result />} />
        </Routes>
    );
}

export default App;