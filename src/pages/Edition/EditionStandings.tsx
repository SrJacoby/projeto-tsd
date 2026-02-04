import { useParams } from "react-router-dom"
import { editionMatchesData } from "../../data/editionMatchesData"
import EditionStandingsComponent from "../../components/EditionStandingsComponent/EditionStandingsComponent"
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

    </div>
  )
}

export default EditionStandings