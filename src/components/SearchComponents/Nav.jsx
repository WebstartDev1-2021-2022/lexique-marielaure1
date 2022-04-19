import { OpenApp } from "../OpenApp"
import { SearchInput } from "./SearchInput"
import { Categorie } from "./Categorie"
import { ListDef } from "./ListDef"
import { useState } from "react"

export const Nav = () => {

    const [component, setComponent] = useState(0)
    const [actived, setActived] = useState(false)

    function componentSection(){
        if(component == 1){
            return(
                <section className="categorie">
                    <Categorie/>
                </section>
            )
        } else{
            return(
                <section className="search">
                    <SearchInput/>
                    <ListDef/>
                </section>
            )
        }
    }

    function activateSearch(i) {
        setComponent(i)
        
        if(i == 1){
            setActived(true)
            document.body.style.background = "url('images/bg3.svg')"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundAttachment = "scroll"
        } else{
            setActived(false)
            document.body.style.background = "#521B53"
        }
    }

    return (
        <>
            {/* <OpenApp/> */}

            <header className='search-categorie'>
                <img src="images/logo2.svg" alt="" />
                <div className="choice">
                    {/* <div className="choice-btn search-btn" onClick={() => activateSearch(0) }>
                        <span>Recherche</span>
                    </div>
                    <div className="choice-btn categorie-btn actived" onClick={() =>  activateSearch(1) }>
                        <span>Catégories</span>
                    </div> */}
                    <div className={`${actived? "choice-btn search-btn" : "choice-btn search-btn actived"}`} onClick={() => activateSearch(0) }>
                        <span>Recherche</span>
                    </div>
                    <div className={`${actived? "choice-btn categorie-btn actived" : "choice-btn categorie-btn"}`} onClick={() =>  activateSearch(1) }>
                        <span>Catégories</span>
                    </div>
                </div>
            </header>

            { componentSection() }
            
            {/* Voir Outlet du rooter */}
        </>
    );
}