import { set } from "immutable"
import { useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import { useDirectus } from "../../service/useDirectus"

export const SearchInput = ({setPropositions}) => {
    const {word, setWord} = useDirectus(setPropositions)
    
    return (
        <form className="search-bar">
            <button><img src="./images/icon-search.svg" alt="" /></button>
            <input type="search" value={word} onChange={(event) => setWord(event.target.value)} placeholder="Recherche" />
        </form>
    )
}