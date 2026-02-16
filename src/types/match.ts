export type Match = {
    home: string
    away: string
    homeGoals: number | null
    awayGoals: number | null
}

export type Round = {
    round: number
    matches: Match[]
}

export type KnockoutStage = {
    quarterFinals?: Match[]
    semiFinals?: Match[]
    final?: Match
    thirdPlaceMatch?: Match
}

export type EditionMatchesData = {
    rounds: Round[]
    knockout?: KnockoutStage
}