export const SearchProposition = ({proposition, goToDefinition}) => (
    <div className="def">
        <h3 onClick={() => goToDefinition(proposition.id)}>{proposition.name}</h3>
        <h2>{proposition.category_id.name}</h2>
    </div>
)
