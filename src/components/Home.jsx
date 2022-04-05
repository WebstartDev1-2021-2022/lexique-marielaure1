import {SearchInput} from "./SearchInput"
import {SearchResults} from "./SearchResults"

export const Home = () => {
    return (
        <>
            <header className='search-categorie'>
                <img src="images/logo2.svg" alt="" />
                <div className="choice">
                    <div className='choice-btn actived'>
                        <span>Recherche</span>
                    </div>
                    <div className='choice-btn'>
                        <span>Catégories</span>
                    </div>
                </div>
                <div className="search">
                    <SearchInput/>
                    <SearchResults/>

                    {/* Voir Outlet du rooter */}
                </div>
            </header>
        </>
    );
}