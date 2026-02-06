import { editionStandingsData } from "../../data/editionStandingsData"
import { editionMatchesData } from "../../data/editionMatchesData"
import { buildTable } from "../../utils/buildTable"
import styles from "./EditionStandingsComponent.module.css"

type Props = {
  editionID: string
}

const EditionStandingsComponent = ({ editionID }: Props) => {
  const standings = editionStandingsData[editionID]
  const matches = editionMatchesData[editionID]

  if (!standings || !matches) return null

  // 👉 todos os times da edição (necessário para o TSD 3)
  const allTeams = standings.groups.flatMap(group => group.teams)

  return (
    <div className={styles.container}>
      {standings.groups.map(group => {
        // 🔹 no TSD 3 a tabela considera TODOS os times
        const teamsForTable =
          editionID === "3" ? allTeams : group.teams

        const fullTable = buildTable(teamsForTable, matches.rounds)

        // 🔹 mas visualmente mostramos apenas os times do grupo
        const table =
          editionID === "3"
            ? fullTable.filter(team =>
                group.teams.includes(team.team)
              )
            : fullTable

        return (
          <section key={group.name} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.name}</h3>

            <div className={styles.table}>
              <div className={`${styles.row} ${styles.header}`}>
                <span className={styles.team}>Time</span>
                <span className={styles.value}>P</span>
                <span className={styles.value}>J</span>
                <span className={styles.value}>V</span>
                <span className={styles.value}>E</span>
                <span className={styles.value}>D</span>
                <span className={styles.value}>GM</span>
                <span className={styles.value}>GS</span>
                <span className={styles.value}>SG</span>
              </div>

              {table.map(team => (
                <div key={team.team} className={styles.row}>
                  <span className={styles.team}>{team.team}</span>
                  <span className={styles.value}>{team.P}</span>
                  <span className={styles.value}>{team.J}</span>
                  <span className={styles.value}>{team.V}</span>
                  <span className={styles.value}>{team.E}</span>
                  <span className={styles.value}>{team.D}</span>
                  <span className={styles.value}>{team.GM}</span>
                  <span className={styles.value}>{team.GS}</span>
                  <span className={styles.value}>{team.SG}</span>
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
