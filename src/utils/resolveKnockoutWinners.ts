import type { KnockoutMatch } from "./buildKnockout"

function getWinner(match: KnockoutMatch): string {
  if (match.homeGoals === null || match.awayGoals === null) {
    return "A definir"
  }

  if (match.homeGoals > match.awayGoals) return match.home
  if (match.awayGoals > match.homeGoals) return match.away

  if (
    match.homePenalties != null &&
    match.awayPenalties != null
  ) {
    return match.homePenalties > match.awayPenalties
      ? match.home
      : match.away
  }

  return "A definir"
}

function getLoser(match: KnockoutMatch): string | null {
  const winner = getWinner(match)
  if(!winner) return null
  return winner === match.home ? match.away : match.home
}

export function resolveKnockoutWinners(knockout: {
  quarterFinals: KnockoutMatch[]
  semiFinals: KnockoutMatch[]
  final: KnockoutMatch
  thirdPlaceMatch?: KnockoutMatch
}) {
  const semiFinals: KnockoutMatch[] = [
    {
      ...knockout.semiFinals[0],
      home: getWinner(knockout.quarterFinals[0]),
      away: getWinner(knockout.quarterFinals[1]),
    },
    {
      ...knockout.semiFinals[1],
      home: getWinner(knockout.quarterFinals[2]),
      away: getWinner(knockout.quarterFinals[3]),
    },
  ]

  const final: KnockoutMatch = {
    ...knockout.final,
    home: getWinner(semiFinals[0]),
    away: getWinner(semiFinals[1]),
  }

  let thirdPlaceMatch = knockout.thirdPlaceMatch

  if(thirdPlaceMatch) {
    thirdPlaceMatch = {
      ...thirdPlaceMatch,
      home: getLoser(semiFinals[0]) ?? "A definir",
      away: getLoser(semiFinals[1]) ?? "A definir",
    }
  }

  return {
    ...knockout,
    semiFinals,
    final,
    thirdPlaceMatch,
  }
}