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

export type EditionMatchesData = {
    rounds: Round[]
}