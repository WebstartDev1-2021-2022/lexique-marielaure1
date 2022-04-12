import {SearchInput} from "./SearchInput"
import {SearchResults} from "../SearchResults"
let choiceBtn = document.querySelectorAll(".choice-btn")



export const Home = () => {

    const activateSearch = (i) => {
        choiceBtn.forEach(btn => {
            btn.classList.remove("actived")
        });
        choiceBtn[i].classList.toggle("actived")
    }

    return (
        <>
            <header className='search-categorie'>
                <img src="images/logo2.svg" alt="" />
                <div className="choice">
                    <div className='choice-btn actived' onclick={() => activateSearch(0)}>
                        <span>Recherche</span>
                    </div>
                    <div className='choice-btn' onclick={() => activateSearch(1)}>
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