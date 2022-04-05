import { set } from "immutable"
import { useState } from "react"

export const SearchInput = () => {
    const [words, setWords] = useState('')
    // const[responses, setResponses] = useState([])

    const onChange = (event) => {
        setWords(event.target.value)
    }

    return (
        <form className="search-bar">
            <button><img src="./images/icon-search.svg" alt="" /></button>
            <input type="search" value={words} onChange={onChange} placeholder="Recherche" />
        </form>
    )
}