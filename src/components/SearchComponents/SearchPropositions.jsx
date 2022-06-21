import { SearchProposition } from "./SearchProposition"

export const SearchPropositions = ({propositions, goToDefinition}) => (
    <div className="listDef">
        {propositions.map((proposition) => (
            <SearchProposition proposition={proposition} key={proposition.id} name={proposition.name} goToDefinition={ goToDefinition }/>
        ))}
    </div>
)