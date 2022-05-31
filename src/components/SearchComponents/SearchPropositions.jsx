import { SearchProposition } from "./SearchProposition"

export const SearchPropositions = ({propositions, goToDefinition}) => (
    <div className="listDef">
        {propositions.map((proposition) => (
            <SearchProposition proposition={proposition} key={proposition.id} name={proposition.name} goToDefinition={ goToDefinition }/>
        ))}
    </div>
)


// return (
//     <div className="listDef">
//         <div className="def">
//             <h3>Plume</h3>
//             <p className="digital">Logiciel</p>
//         </div>
//         <div className="def">
//             <h3>Baseline</h3>
//             <p className="impression">Edition de texte</p>
//         </div>
//         <div className="def">
//             <h3>Bauhaus</h3>
//             <p className="pratique">Mouvements Artistiques</p>
//         </div>
//         <div className="def">
//             <h3>Plume</h3>
//             <p className="digital">Logiciel</p>
//         </div>
//         <div className="def">
//             <h3>Baseline</h3>
//             <p className="impression">Edition de texte</p>
//         </div>
//         <div className="def">
//             <h3>Bauhaus</h3>
//             <p className="pratique">Mouvements Artistiques</p>
//         </div>
//         <div className="def">
//             <h3>Plume</h3>
//             <p className="digital">Logiciel</p>
//         </div>
//         <div className="def">
//             <h3>Baseline</h3>
//             <p className="impression">Edition de texte</p>
//         </div>
//         <div className="def">
//             <h3>Bauhaus</h3>
//             <p className="pratique">Mouvements Artistiques</p>
//         </div>
//     </div>
// )