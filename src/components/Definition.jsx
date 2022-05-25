import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Definition = () => {
    const { state } = useLocation()

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    return(
        <>
            <button className="retour" onClick={ goToHome }>
                <img src="./images/arrow.svg" alt="" />
            </button>
            <div className="categorieDef">
                <div className="bande .pratiqueBG">
                    <p>Def : {state.definitionID}</p>
                </div>
                <img src="./images/planet-pratique.svg" alt="" />
            </div>
            <p></p>
        </>
    )
}