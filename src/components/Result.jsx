import { useLocation } from 'react-router-dom'

export const Result = () => {
    const { state } = useLocation()
    return(
        <>
            <button className="retour">
                <img src="" alt="" />
            </button>
            <div className="categorieDef">
                <div className="bande .pratiqueBG">
                    <p>Community Manager</p>
                </div>
                <img src="./images/planet-pratique.svg" alt="" />
            </div>
            <p>{state.definition}</p>
        </>
    )
}