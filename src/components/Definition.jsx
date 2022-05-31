import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from "react"

export const Definition = () => {
    const { state } = useLocation()
    const [definition, setDefinition] = useState(null)

    useEffect(() => {
        // fetch avec l'id pour récupérer l'ensemble de la définition
        const  getDefinition = async () => {
            try {
                const response = await fetch(
                    `https://umk1ukl6.directus.app/items/Definition/${state.definitionID}?fields=name,content,category_id.name`)

                const {data} = await response.json()

                if(data.errors){
                    throw data.errors.message
                }

                // Vérifier ce qu'est data
                setDefinition(data)


            } catch(error){
                console.error("SearchInput > getDefinition > error > ", error)
            }
        }
        getDefinition()
        
    }, [])

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const couleurCategorie = "";

    // if(definition.category_id.name == "digital"){
    //     couleurCategorie = "digital"
    // }


    return(
        <>
            {definition ? (
                <>
                    <button className="retour" onClick={ goToHome }>
                        <img src="./images/arrow.svg" alt="" />
                    </button>
                    <div className="categorieDef">
                        <div className="bande .pratiqueBG">
                            <p>{definition.name}</p>
                        </div>
                        <img src="./images/planet-pratique.svg" alt="" />
                    </div>
                    <div className="category">
                        <p>{definition.category_id.name}</p>
                    </div>
                    <div className="content">
                        <p>{definition.content}</p>
                    </div>
                </>
                
            ) : (
                <p>Chargement...</p>
            )}
        </>
    )
}

