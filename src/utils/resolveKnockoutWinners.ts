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

  const thirdPlaceMatch =
    knockout.thirdPlaceMatch
      ? {
          ...knockout.thirdPlaceMatch,
          home:
            getWinner(semiFinals[0]) === final.home
              ? final.away
              : final.home,
          away:
            getWinner(semiFinals[1]) === final.home
              ? final.away
              : final.home,
        }
      : undefined

  return {
    ...knockout,
    semiFinals,
    final,
    thirdPlaceMatch,
  }
}