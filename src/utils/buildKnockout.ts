/* ======================================================
   TIPOS
====================================================== */

export type KnockoutMatch = {
  home: string
  away: string
  homeGoals: number | null
  awayGoals: number | null
  homePenalties?: number | null
  awayPenalties?: number | null
}

export type KnockoutResult = {
  quarterFinals: KnockoutMatch[]
  semiFinals: KnockoutMatch[]
  final: KnockoutMatch
  thirdPlaceMatch?: KnockoutMatch
}

/* ======================================================
   FUNÇÕES AUXILIARES
====================================================== */

const winner = (match: KnockoutMatch): string | null => {
  if (match.homeGoals === null || match.awayGoals === null) return null

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

  return null
}

const loser = (match: KnockoutMatch): string | null => {
  const w = winner(match)
  if (!w) return null
  return w === match.home ? match.away : match.home
}

/* ======================================================
   BUILDER — TSD 1 e TSD 2 (CRUZAMENTO POR GRUPOS)
====================================================== */
/*
  Regulamento:
  1ºA x 4ºB
  2ºB x 3ºA
  1ºB x 4ºA
  2ºA x 3ºB
*/

export const buildKnockoutByGroups = (
  groupA: string[],
  groupB: string[],
  hasThirdPlace: boolean
): KnockoutResult => {
  const quarterFinals: KnockoutMatch[] = [
    { home: groupA[0], away: groupB[3], homeGoals: null, awayGoals: null },
    { home: groupB[1], away: groupA[2], homeGoals: null, awayGoals: null },
    { home: groupB[0], away: groupA[3], homeGoals: null, awayGoals: null },
    { home: groupA[1], away: groupB[2], homeGoals: null, awayGoals: null },
  ]

  const semiFinals: KnockoutMatch[] = [
    {
      home: winner(quarterFinals[0]) ?? "A definir",
      away: winner(quarterFinals[1]) ?? "A definir",
      homeGoals: null,
      awayGoals: null,
    },
    {
      home: winner(quarterFinals[2]) ?? "A definir",
      away: winner(quarterFinals[3]) ?? "A definir",
      homeGoals: null,
      awayGoals: null,
    },
  ]

  const final: KnockoutMatch = {
    home: winner(semiFinals[0]) ?? "A definir",
    away: winner(semiFinals[1]) ?? "A definir",
    homeGoals: null,
    awayGoals: null,
  }

  if (!hasThirdPlace) {
    return { quarterFinals, semiFinals, final }
  }

  const thirdPlaceMatch: KnockoutMatch = {
    home: loser(semiFinals[0]) ?? "A definir",
    away: loser(semiFinals[1]) ?? "A definir",
    homeGoals: null,
    awayGoals: null,
  }

  return {
    quarterFinals,
    semiFinals,
    thirdPlaceMatch,
    final,
  }
}

/* ======================================================
   BUILDER — TSD 3 (RANKING GERAL)
====================================================== */
/*
  Cruzamento:
  1º x 8º
  3º x 6º
  2º x 7º
  4º x 5º
*/

export const buildKnockoutByRanking = (
  rankedTeams: string[],
  hasThirdPlace: boolean
): KnockoutResult => {
  const quarterFinals: KnockoutMatch[] = [
    { home: rankedTeams[0], away: rankedTeams[7], homeGoals: null, awayGoals: null },
    { home: rankedTeams[2], away: rankedTeams[5], homeGoals: null, awayGoals: null },
    { home: rankedTeams[1], away: rankedTeams[6], homeGoals: null, awayGoals: null },
    { home: rankedTeams[3], away: rankedTeams[4], homeGoals: null, awayGoals: null },
  ]

  const semiFinals: KnockoutMatch[] = [
    {
      home: winner(quarterFinals[0]) ?? "A definir",
      away: winner(quarterFinals[1]) ?? "A definir",
      homeGoals: null,
      awayGoals: null,
    },
    {
      home: winner(quarterFinals[2]) ?? "A definir",
      away: winner(quarterFinals[3]) ?? "A definir",
      homeGoals: null,
      awayGoals: null,
    },
  ]

  const final: KnockoutMatch = {
    home: winner(semiFinals[0]) ?? "A definir",
    away: winner(semiFinals[1]) ?? "A definir",
    homeGoals: null,
    awayGoals: null,
  }

  if (!hasThirdPlace) {
    return { quarterFinals, semiFinals, final }
  }

  const thirdPlaceMatch: KnockoutMatch = {
    home: loser(semiFinals[0]) ?? "A definir",
    away: loser(semiFinals[1]) ?? "A definir",
    homeGoals: null,
    awayGoals: null,
  }

  return {
    quarterFinals,
    semiFinals,
    thirdPlaceMatch,
    final,
  }
}
