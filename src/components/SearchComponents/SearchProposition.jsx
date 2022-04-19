export const SearchProposition = ({proposition, goToDefinition}) => (
    <div className="def">
        <h3 onClick={() => goToDefinition(proposition.id)}>{proposition.name}</h3>
    </div>
)


// function idCategorie(){
//     if(proposition.category_id == 1){
//         <p className="pratique">Pratique</p>
//     }
    
//     if (proposition.category_id == 2){
//         <p className="impression">Impression</p>
//     }

//     if (proposition.category_id == 3){
//         <p className="digital">Digital</p>
//     }
// }