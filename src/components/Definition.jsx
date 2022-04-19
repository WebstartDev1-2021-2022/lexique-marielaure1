import { useLocation } from 'react-router-dom'

export const Definition = () => {
    const { state } = useLocation()

    return(
        <>
            <button className="retour">
                <img src="" alt="" />
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