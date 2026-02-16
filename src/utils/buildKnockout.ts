export interface KnockoutMatch {
  home: string
  away: string
  homeGoals: number | null
  awayGoals: number | null
  homePenalties?: number | null
  awayPenalties?: number | null
}

/* =========================================
   MATA-MATA POR GRUPOS (TSD 1 e 2)
========================================= */
export function buildKnockoutByGroups(
  groupA: string[],
  groupB: string[],
  hasThirdPlace: boolean
) {
  const quarterFinals: KnockoutMatch[] = [
    {
      home: groupA[0],
      away: groupB[3],
      homeGoals: null,
      awayGoals: null,
    },
    {
      home: groupB[1],
      away: groupA[2],
      homeGoals: null,
      awayGoals: null,
    },
    {
      home: groupB[0],
      away: groupA[3],
      homeGoals: null,
      awayGoals: null,
    },
    {
      home: groupA[1],
      away: groupB[2],
      homeGoals: null,
      awayGoals: null,
    },
  ]

  const semiFinals: KnockoutMatch[] = [
    {
      home: "A definir",
      away: "A definir",
      homeGoals: null,
      awayGoals: null,
    },
    {
      home: "A definir",
      away: "A definir",
      homeGoals: null,
      awayGoals: null,
    },
  ]

  const final: KnockoutMatch = {
    home: "A definir",
    away: "A definir",
    homeGoals: null,
    awayGoals: null,
  }

  const thirdPlaceMatch: KnockoutMatch | undefined = hasThirdPlace
    ? {
        home: "A definir",
        away: "A definir",
        homeGoals: null,
        awayGoals: null,
      }
    : undefined

  return {
    quarterFinals,
    semiFinals,
    final,
    thirdPlaceMatch,
  }
}

/* =========================================
   MATA-MATA POR RANKING (TSD 3)
========================================= */
export function buildKnockoutByRanking(
  ranking: string[],
  hasThirdPlace: boolean
) {
  // ranking já vem ordenado (1º ao 8º)
  const quarterFinals: KnockoutMatch[] = [
    { home: ranking[0], away: ranking[7], homeGoals: null, awayGoals: null },
    { home: ranking[2], away: ranking[5], homeGoals: null, awayGoals: null },
    { home: ranking[1], away: ranking[6], homeGoals: null, awayGoals: null },
    { home: ranking[3], away: ranking[4], homeGoals: null, awayGoals: null },
  ]

  const semiFinals: KnockoutMatch[] = [
    { home: "A definir", away: "A definir", homeGoals: null, awayGoals: null },
    { home: "A definir", away: "A definir", homeGoals: null, awayGoals: null },
  ]

  const final: KnockoutMatch = {
    home: "A definir",
    away: "A definir",
    homeGoals: null,
    awayGoals: null,
  }

  const thirdPlaceMatch: KnockoutMatch | undefined = hasThirdPlace
    ? {
        home: "A definir",
        away: "A definir",
        homeGoals: null,
        awayGoals: null,
      }
    : undefined

  return {
    quarterFinals,
    semiFinals,
    final,
    thirdPlaceMatch,
  }
}