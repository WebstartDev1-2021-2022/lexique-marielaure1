import { set } from "immutable"
import { useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'

export const SearchInput = () => {
    const [word, setWord] = useState('')
    // const[responses, setResponses] = useState([])

    useEffect(() => {
        if(!word) return

        fetch()
    }, [word])

    const navigate = useNavigate()

    const goToResult = () => {
        navigate('/result', { state: { defintion: 'abcd' } })
    }
    return (
        <form className="search-bar">
            <button onClick={ goToResult }><img src="./images/icon-search.svg" alt="" /></button>
            <input type="search" value={word} onChange={(event) => setWord(event.target.value)} placeholder="Recherche" />
        </form>
    )
}