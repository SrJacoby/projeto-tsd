import { useParams } from "react-router-dom"
import { editionMatchesData } from "../../data/editionMatchesData"
import { editionStandingsData } from "../../data/editionStandingsData"
import { editionKnockoutData } from "../../data/editionKnockoutData"

import EditionStandingsComponent from "../../components/EditionStandingsComponent/EditionStandingsComponent"

import { getQualifiedTeams } from "../../utils/getQualifiedTeams"
import {
  buildKnockoutByGroups,
  buildKnockoutByRanking,
  type KnockoutMatch,
} from "../../utils/buildKnockout"

import { applyKnockoutScores } from "../../utils/applyKnockoutScores"
import { resolveKnockoutWinners } from "../../utils/resolveKnockoutWinners"

import styles from "./EditionStandings.module.css"

const EditionStandings = () => {
  const { editionID } = useParams<{ editionID: string }>()

  if (!editionID) return <p>Edição inválida</p>

  const data = editionMatchesData[editionID]
  if (!data) return <p>Nenhum jogo encontrado</p>

  const standings = editionStandingsData[editionID]
  if (!standings) return <p>Classificação não encontrada</p>

  const groups = standings.groups

  let knockout:
    | {
        quarterFinals: KnockoutMatch[]
        semiFinals: KnockoutMatch[]
        final: KnockoutMatch
        thirdPlaceMatch?: KnockoutMatch
      }
    | null = null

  // ---------- TSD 1 ----------
  if (editionID === "1") {
    const groupA = getQualifiedTeams(groups[0], data.rounds, 4).map(
      (t) => t.team
    )
    const groupB = getQualifiedTeams(groups[1], data.rounds, 4).map(
      (t) => t.team
    )

    const baseKnockout = buildKnockoutByGroups(groupA, groupB, true)
    const scores = editionKnockoutData[editionID]

    const withScores = scores
      ? applyKnockoutScores(baseKnockout, scores)
      : baseKnockout

    knockout = resolveKnockoutWinners(withScores)
  }

  // ---------- TSD 2 ----------
  if (editionID === "2") {
    const qualified = getQualifiedTeams(groups[0], data.rounds, 8)
      .slice(0, 8)
      .map((t) => t.team)

    const fakeGroupA = qualified.slice(0, 4)
    const fakeGroupB = qualified.slice(4, 8)

    const baseKnockout = buildKnockoutByGroups(
      fakeGroupA,
      fakeGroupB,
      false
    )

    const scores = editionKnockoutData[editionID]

    const withScores = scores
      ? applyKnockoutScores(baseKnockout, scores)
      : baseKnockout

    knockout = resolveKnockoutWinners(withScores)
  }

  // ---------- TSD 3 ----------
  if (editionID === "3") {
    const allTables = groups.map((group) =>
      getQualifiedTeams(group, data.rounds, group.teams.length)
    )

    const firstAndSeconds = allTables.flatMap((table) =>
      table.slice(0, 2)
    )

    const thirds = allTables
      .map((table) => table[2])
      .filter(Boolean)

    const bestThirds = thirds
      .sort(
        (a, b) =>
          b.P - a.P || b.SG - a.SG || b.GM - a.GM
      )
      .slice(0, 2)

    const qualifiedTeams = [
      ...firstAndSeconds,
      ...bestThirds,
    ]
      .sort(
        (a, b) =>
          b.P - a.P || b.SG - a.SG || b.GM - a.GM
      )
      .map((t) => t.team)

    const baseKnockout = buildKnockoutByRanking(
      qualifiedTeams,
      true
    )

    const scores = editionKnockoutData[editionID]

    const withScores = scores
      ? applyKnockoutScores(baseKnockout, scores)
      : baseKnockout

    knockout = resolveKnockoutWinners(withScores)
  }

  if (!knockout) return null

  const finalMatch = knockout.final

  const champion =
    finalMatch.homeGoals !== null &&
    finalMatch.awayGoals !== null
      ? finalMatch.homeGoals > finalMatch.awayGoals
        ? finalMatch.home
        : finalMatch.homeGoals < finalMatch.awayGoals
        ? finalMatch.away
        : finalMatch.homePenalties! >
          finalMatch.awayPenalties!
        ? finalMatch.home
        : finalMatch.away
      : null

  return (
    <div className={styles.page}>
      <EditionStandingsComponent editionID={editionID} />

      <h2 className={styles.title}>Jogos</h2>

      {data.rounds.map((round) => (
        <section key={round.round} className={styles.round}>
          <h3 className={styles.roundTitle}>
            Rodada {round.round}
          </h3>

          {round.matches.length === 0 ? (
            <p className={styles.empty}>
              Rodada ainda não foi definida
            </p>
          ) : (
            <ul className={styles.matches}>
              {round.matches.map((match, index) => (
                <li key={index} className={styles.match}>
                  <span className={styles.home}>
                    {match.home}
                  </span>

                  <span className={styles.score}>
                    {match.homeGoals ?? "-"} x{" "}
                    {match.awayGoals ?? "-"}
                  </span>

                  <span className={styles.away}>
                    {match.away}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <h2 className={styles.title}>Mata-Mata</h2>

      {/* Quartas */}
      <section className={styles.round}>
        <h3 className={styles.roundTitle}>
          Quartas de Final
        </h3>

        <ul className={styles.matches}>
          {knockout.quarterFinals.map((m, i) => (
            <li key={i} className={styles.match}>
              <span className={styles.home}>{m.home}</span>

              <span className={styles.score}>
                {m.homeGoals ?? "-"} x{" "}
                {m.awayGoals ?? "-"}
                {m.homeGoals === m.awayGoals &&
                  m.homePenalties !== null &&
                  m.awayPenalties !== null && (
                    <span className={styles.penalties}>
                      {" "}
                      ({m.homePenalties} x{" "}
                      {m.awayPenalties} p)
                    </span>
                  )}
              </span>

              <span className={styles.away}>{m.away}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Semifinais */}
      <section className={styles.round}>
        <h3 className={styles.roundTitle}>Semifinais</h3>

        <ul className={styles.matches}>
          {knockout.semiFinals.map((m, i) => (
            <li key={i} className={styles.match}>
              <span className={styles.home}>{m.home}</span>

              <span className={styles.score}>
                {m.homeGoals ?? "-"} x{" "}
                {m.awayGoals ?? "-"}
                {m.homeGoals === m.awayGoals &&
                  m.homePenalties !== null &&
                  m.awayPenalties !== null && (
                    <span className={styles.penalties}>
                      {" "}
                      ({m.homePenalties} x{" "}
                      {m.awayPenalties} p)
                    </span>
                  )}
              </span>

              <span className={styles.away}>{m.away}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3º lugar */}
      {knockout.thirdPlaceMatch && (
        <section className={styles.round}>
          <h3 className={styles.roundTitle}>
            Decisão de 3º Lugar
          </h3>

          <ul className={styles.matches}>
            <li className={styles.match}>
              <span className={styles.home}>
                {knockout.thirdPlaceMatch.home}
              </span>

              <span className={styles.score}>
                {knockout.thirdPlaceMatch.homeGoals ?? "-"} x{" "}
                {knockout.thirdPlaceMatch.awayGoals ?? "-"}
              </span>

              <span className={styles.away}>
                {knockout.thirdPlaceMatch.away}
              </span>
            </li>
          </ul>
        </section>
      )}

      {/* Final */}
      <section className={styles.round}>
        <h3 className={styles.roundTitle}>Final</h3>

        <ul className={styles.matches}>
          <li className={styles.match}>
            <span
              className={`${styles.home} ${
                champion === finalMatch.home
                  ? styles.champion
                  : ""
              }`}
            >
              {finalMatch.home}
            </span>

            <span className={styles.score}>
              {finalMatch.homeGoals} x{" "}
              {finalMatch.awayGoals}
            </span>

            <span
              className={`${styles.away} ${
                champion === finalMatch.away
                  ? styles.champion
                  : ""
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