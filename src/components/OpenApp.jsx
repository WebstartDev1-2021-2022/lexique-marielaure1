export const OpenApp = setTimeout(() => {
    return (
        <header className="accueil">
            <img src="images/Logo1.svg" alt=""/>
            <h2>Définitions dans l’univers du Design sous toutes ses formes</h2>
            <p className="choicePlanet">Choisi une planète</p>
            <div className="planets">
                <a href=""><img src="images/planet-pratique.svg" alt="" /></a>
                <a href=""><img src="images/planet-impression.svg" alt="" /></a>
                <a href=""><img src="images/planet-digital.svg" alt="" /></a>
            </div>
        </header>
    )
}, 5000);