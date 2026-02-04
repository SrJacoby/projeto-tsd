import { editionStandingsData } from "../../data/editionStandingsData";
import { editionMatchesData } from "../../data/editionMatchesData";
import { buildTable } from "../../utils/buildTable";

type Props = {
    editionID: string
}

const EditionStandingsComponent = ({editionID}: Props) => {
    const standings = editionStandingsData[editionID]
    const matches = editionMatchesData[editionID]

    if(!standings || !matches) return null

  return (
    <div>
        {standings.groups.map((group) => {
            const table = buildTable(group.teams, matches.rounds)
            return(
                <section key={group.name}>
                    <h3>{group.name}</h3>

                    <div>
                        <div>
                            <span>Time</span>
                            <span>P</span>
                            <span>J</span>
                            <span>V</span>
                            <span>D</span>
                            <span>GM</span>
                            <span>GS</span>
                            <span>SG</span>
                        </div>

                        {table.map((team) => (
                            <div key={team.team}>
                                <span>{team.team}</span>
                                <span>{team.J}</span>
                                <span>{team.V}</span>
                                <span>{team.E}</span>
                                <span>{team.D}</span>
                                <span>{team.GM}</span>
                                <span>{team.GS}</span>
                                <span>{team.SG}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )

        })}
    </div>
  )
}

export default EditionStandingsComponent