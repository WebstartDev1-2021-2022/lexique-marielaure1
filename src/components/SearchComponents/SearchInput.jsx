import { set } from "immutable"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export const SearchInput = () => {
    const [words, setWords] = useState('')
    // const[responses, setResponses] = useState([])

    const navigate = useNavigate()

    const onChange = (event) => {
        setWords(event.target.value)
    }
    const goToResult = () => {
        navigate('/result', { state: { defintion: 'abcd' } })
    }
    return (
        <form className="search-bar">
            <button onClick={ goToResult }><img src="./images/icon-search.svg" alt="" /></button>
            <input type="search" value={words} onChange={onChange} placeholder="Recherche" />
        </form>
    )
}