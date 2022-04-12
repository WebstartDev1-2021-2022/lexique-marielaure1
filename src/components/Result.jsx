import { useLocation } from 'react-router-dom'

export const Result = () => {
    const { state } = useLocation()
    return(
        <>
            <p>Définition: {state.definition}</p>
        </>
    )
}