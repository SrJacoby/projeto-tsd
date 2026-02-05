import { useParams } from "react-router-dom"
import { editionMatchesData } from "../../data/editionMatchesData"
import EditionStandingsComponent from "../../components/EditionStandingsComponent/EditionStandingsComponent"
import { getQualifiedTeams } from "../../utils/getQualifiedTeams"
import { buildKnockout } from "../../utils/buildKnockout"
import { editionStandingsData } from "../../data/editionStandingsData"
import styles from './EditionStandings.module.css'


const EditionStandings = () => {
  const {editionID} = useParams<{editionID: string}>()

  if(!editionID){
    return <p>Edição inválida</p>
  }
  const data = editionMatchesData[editionID ?? ""]

  if(!data) {
    return <p>Nenhum jogo encontrado para esta edição</p>
  }

  const standings = editionStandingsData[editionID]

  if(!standings) return <p>Classificação não encontrada</p>

  const groupA = getQualifiedTeams(
    standings.groups[0],
    data.rounds
  ).map(t => t.team)

  const groupB = getQualifiedTeams(
    standings.groups[1],
    data.rounds
  ).map(t => t.team)

  const knockout = buildKnockout(groupA, groupB)

  return (
    <div className={styles.page}>
      <EditionStandingsComponent editionID={editionID}/>
      <h2 className={styles.title}>Jogos</h2>

      {data.rounds.map((round) => (
        <section key={round.round} className={styles.round}>
          <h3 className={styles.roundTitle}>Rodada {round.round}</h3>

          {round.matches.length === 0 ? (
            <p className={styles.empty}>Rodada ainda não foi definida</p>
          ) : (
            <ul className={styles.matches}>
              {round.matches.map((match, index) => (
                <li key={index} className={styles.match}>
                  <span className={styles.home}>{match.home}</span>

                  <span className={styles.score}>
                    {match.homeGoals !== null ? match.homeGoals : "-"}
                    {" x "}
                    {match.awayGoals !== null ? match.awayGoals : "-"}
                  </span>

                  <span className={styles.away}>{match.away}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <h2 className={styles.title}>Mata-mata</h2>

      <section>
        <h3>Quartas de Final</h3>
        {knockout.quarterFinals.map((m, i) => (
          <p key={i}>{m.home} x {m.away}</p>
        ))}
      </section>

      <section>
        <h3>Semifinais</h3>
        {knockout.semiFinals.map((m, i) => (
          <p key={i}>{m.home} x {m.away}</p>
        ))}
      </section>

      <section>
        <h3>Final</h3>
          <p>{knockout.final.home} x {knockout.final.away}</p>
      </section>
    </div>
  )
}

export default EditionStandings