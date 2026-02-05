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

  const finalMatch = knockout.final
  
  const champion = 
    finalMatch.homeGoals !== null &&
    finalMatch.awayGoals !== null 
      ? finalMatch.homeGoals > finalMatch.awayGoals
        ? finalMatch.home
        : finalMatch.homeGoals < finalMatch.awayGoals
          ? finalMatch.away
          : finalMatch.homePenalties! > finalMatch.awayPenalties!
            ? finalMatch.home
            : finalMatch.away
      : null

  return (
    <div className={styles.page}>
      {/* Tabela */}
      <EditionStandingsComponent editionID={editionID}/>
      <h2 className={styles.title}>Jogos</h2>
      {/* Rodadas */}
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
      {/* Mata-Mata */}
      <h2 className={styles.title}>Mata-Mata</h2>
      
      <section className={styles.round}>
        <h3 className={styles.roundTitle}>Quartas de Final</h3>

        <ul className={styles.matches}>
          {knockout.quarterFinals.map((m, i) => (
            <li key={i} className={styles.match}>
              <span className={styles.home}>{m.home}</span>

              <span className={styles.score}>
                {m.homeGoals ?? "-"} x {m.awayGoals ?? "-"}
                {m.homeGoals === m.awayGoals && m.homePenalties !== null && m.awayPenalties != null && (
                  <span className={styles.penalties}>
                    {" "}({m.homePenalties} x {m.awayPenalties} p)
                  </span>
                )}
              </span>

              <span className={styles.away}>{m.away}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.round}>
        <h3 className={styles.roundTitle}>Semifinais</h3>

        <ul className={styles.matches}>
          {knockout.semiFinals.map((m, i) => (
            <li key={i} className={styles.match}>
              <span className={styles.home}>{m.home}</span>

              <span className={styles.score}>
                {m.homeGoals ?? "-"} x {m.awayGoals ?? "-"}
                {m.homeGoals === m.awayGoals && m.homePenalties !== null && m.awayPenalties != null && (
                  <span className={styles.penalties}>
                    {" "}({m.homePenalties} x {m.awayPenalties} p)
                  </span>
                )}
              </span>

              <span className={styles.away}>{m.away}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.round}>
        <h3 className={styles.roundTitle}>Final</h3>
        <ul className={styles.matches}>
          <li className={styles.match}>
            <span
              className={`${styles.home} ${
                champion === finalMatch.home ? styles.champion : ""
              }`}
            >
              {finalMatch.home}
            </span>

            <span className={styles.score}>
              {finalMatch.homeGoals} x {finalMatch.awayGoals}
              {finalMatch.homeGoals === finalMatch.awayGoals &&
              finalMatch.homePenalties !== null &&
              finalMatch.awayPenalties !== null && (
                <span className={styles.penalties}>
                  {" "}({finalMatch.homePenalties} x {finalMatch.awayPenalties} p)
                </span>
              )}
            </span>

            <span
              className={`${styles.away} ${
                champion === finalMatch.away ? styles.champion : ""
              }`}
            >
              {finalMatch.away}
            </span>
          </li>
        </ul>
      </section>

    </div>
  )
}

export default EditionStandings