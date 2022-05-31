import { useEffect } from "react"

export const useDirectus = ({setPropositions}) => {
    
    const [propositions, setPropositions] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {}, [word])

    const getPropositions = async (word) => {
        if(!word.trim()){
            setPropositions([])
            return
        }
        try {
            const response = await fetch(
                `https://umk1ukl6.directus.app/items/Definition?fields=name,id,category_id&filter[name][_starts_with]=${word}`)
            const {data} = await response.json()

            console.log(data)
            setPropositions(data)
        } catch(error){
            console.error("SearchInput > getDefinition > error > ", error)
        }
    }
}