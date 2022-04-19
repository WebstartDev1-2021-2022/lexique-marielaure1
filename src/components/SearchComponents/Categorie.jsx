import { useNavigate } from 'react-router-dom'

export const Categorie = () => {
    const navigate = useNavigate()

    const goToCategorie = () => {
        navigate('/categorie')
    }

    return (
        <>
            <section className="categorie">
                <div className="categorie-1 pratique">
                    <h2>Pratique</h2>
                    <img src="./images/planet-pratique.svg" alt="" className="pratique planet" onClick={ goToCategorie }/>
                </div>
                <div className="categorie-2 impression">
                    <img src="./images/planet-impression.svg" alt="" className="impression planet" />
                    <h2>Impression</h2> 
                </div>
                <div className="categorie-3 digital">
                    <h2>Digital</h2>
                    <img src="./images/planet-digital.svg" alt="" className="digital planet" />
                </div>
                
            </section>
        </>
    )
}