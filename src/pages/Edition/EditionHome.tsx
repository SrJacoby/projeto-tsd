import { useParams } from "react-router-dom"

import { editionMatchesData } from "../../data/editionMatchesData"
import { editionKnockoutData } from "../../data/editionKnockoutData"
import { editionNewsData } from "../../data/editionNewsData"
import { editionStandingsData } from "../../data/editionStandingsData"

import { getQualifiedTeams } from "../../utils/getQualifiedTeams"
import {
  buildKnockoutByGroups,
  buildKnockoutByRanking,
  type KnockoutMatch,
} from "../../utils/buildKnockout"

import { applyKnockoutScores } from "../../utils/applyKnockoutScores"
import { resolveKnockoutWinners } from "../../utils/resolveKnockoutWinners"

import EditionTheme from '../../layouts/EditionTheme/EditionTheme'
import styles from "./EditionHome.module.css"

const EditionHome = () => {
  const { editionID } = useParams<{ editionID: string }>()

  if (!editionID) return <p>Edição inválida</p>

  const matchesData = editionMatchesData[editionID]
  const newsData = editionNewsData[editionID]
  const standings = editionStandingsData[editionID]
  const knockoutScores = editionKnockoutData[editionID]

  if (!matchesData || !newsData || !standings)
    return <p>Dados não encontrados</p>

// Jogos e Gols

  const totalMatches = matchesData.rounds.reduce(
    (acc, round) => acc + round.matches.length,
    0
  )

  const totalGoals = matchesData.rounds.reduce((acc, round) => {
  return (
    acc +
    round.matches.reduce((sum, match) => {
      const homeGoals = match.homeGoals ?? 0
      const awayGoals = match.awayGoals ?? 0

      return sum + homeGoals + awayGoals
    }, 0)
  )
}, 0)

// Campeões

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
    const groupA = getQualifiedTeams(groups[0], matchesData.rounds, 4).map(
      (t) => t.team
    )
    const groupB = getQualifiedTeams(groups[1], matchesData.rounds, 4).map(
      (t) => t.team
    )

    const base = buildKnockoutByGroups(groupA, groupB, true)

    const withScores = knockoutScores
      ? applyKnockoutScores(base, knockoutScores)
      : base

    knockout = resolveKnockoutWinners(withScores)
  }

  // ---------- TSD 2 ----------
  if (editionID === "2") {
    const qualified = getQualifiedTeams(groups[0], matchesData.rounds, 8)
      .slice(0, 8)
      .map((t) => t.team)

    const fakeGroupA = qualified.slice(0, 4)
    const fakeGroupB = qualified.slice(4, 8)

    const base = buildKnockoutByGroups(fakeGroupA, fakeGroupB, false)

    const withScores = knockoutScores
      ? applyKnockoutScores(base, knockoutScores)
      : base

    knockout = resolveKnockoutWinners(withScores)
  }

  // ---------- TSD 3 ----------
  if (editionID === "3") {
    const allTeams = groups.flatMap((g) => g.teams)

    const generalTable = getQualifiedTeams(
      { name: "", teams: allTeams },
      matchesData.rounds,
      allTeams.length
    )

    const ranking = generalTable.slice(0, 8).map((t) => t.team)

    const base = buildKnockoutByRanking(ranking, true)

    const withScores = knockoutScores
      ? applyKnockoutScores(base, knockoutScores)
      : base

    knockout = resolveKnockoutWinners(withScores)
  }

  if (!knockout) return null

  const finalMatch = knockout.final

  let champion: string | null = null

  if (
    finalMatch.homeGoals !== null &&
    finalMatch.awayGoals !== null
  ) {
    if (finalMatch.homeGoals > finalMatch.awayGoals) {
      champion = finalMatch.home
    } else if (finalMatch.awayGoals > finalMatch.homeGoals) {
      champion = finalMatch.away
    } else if (
      finalMatch.homePenalties != null &&
      finalMatch.awayPenalties != null
    ) {
      champion =
        finalMatch.homePenalties > finalMatch.awayPenalties
          ? finalMatch.home
          : finalMatch.away
    }
  }


  return (
    <EditionTheme>
    <div className={styles.page}>
      <h1 className={styles.title}>Resumo da Edição</h1>

      {/* Estatísticas principais */}
      <section className={styles.stats}>
        <div className={styles.card}>
          <h3>Jogos</h3>
          <p>{totalMatches}</p>
        </div>

        <div className={styles.card}>
          <h3>Gols</h3>
          <p>{totalGoals}</p>
        </div>

        <div className={styles.card}>
          <h3>Campeão</h3>
          <p>{champion ?? "A definir"}</p>
        </div>
      </section>

      {/* Notícias destaque */}
      <section className={styles.news}>
        <h2>Destaques</h2>

        {newsData.featured.map((item) => (
          <div key={item.id} className={styles.newsCard}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <span>{item.date}</span>
          </div>
        ))}
      </section>
    </div>
    </EditionTheme>
  )
}

export default EditionHome