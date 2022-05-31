import { set } from "immutable"
import { useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'

export const SearchInput = ({setPropositions}) => {
    const [word, setWord] = useState('')
    // const[responses, setResponses] = useState([])

    useEffect(() => {

        const  getDefinition = async () => {
            if(!word.trim()){
                setPropositions([])
                return
            }
            try {
                const response = await fetch(
                    `https://umk1ukl6.directus.app/items/Definition?fields=name,id,category_id.name&filter[name][_starts_with]=${word}`)
                const {data} = await response.json()

                console.log(data)
                setPropositions(data)
            } catch(error){
                console.error("SearchInput > getDefinition > error > ", error)
            }
        }
        getDefinition()
    }, [word])

    
    return (
        <form className="search-bar">
            <button><img src="./images/icon-search.svg" alt="" /></button>
            <input type="search" value={word} onChange={(event) => setWord(event.target.value)} placeholder="Recherche" />
        </form>
    )
}