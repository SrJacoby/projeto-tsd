import type { Round } from "../types/match";

export type TableRow = {
    team: string
    P: number
    J: number
    V: number
    E: number
    D: number
    GM: number
    GS: number
    SG: number
}

export const buildTable = (
    teams: string[],
    rounds: Round[]
): TableRow[] => {
    const table: Record<string, TableRow> = {}

    teams.forEach((team) => {
        table[team] = {
            team,
            P: 0,
            J: 0,
            V: 0,
            E: 0,
            D: 0,
            GM: 0,
            GS: 0,
            SG: 0,
        }
    })

    rounds.forEach((round: { matches: { homeGoals: number | null; awayGoals: number | null; home: string | number; away: string | number; }[] }) => {
        round.matches.forEach((match: { homeGoals: number | null; awayGoals: number | null; home: string | number; away: string | number; }) => {
            if(match.homeGoals === null || match.awayGoals === null)
            return

            const home = table[match.home]
            const away = table[match.away]

            if(!home || !away) return

            home.J++
            away.J++

            home.GM += match.homeGoals
            home.GS += match.awayGoals

            away.GM += match.awayGoals
            away.GS += match.homeGoals

            if(match.homeGoals > match.awayGoals) {
                home.V++
                home.P += 3
                away.D++
            } else if(match.homeGoals < match.awayGoals) {
                away.V++
                away.P += 3
                home.D++
            } else{
                home.E++
                away.E++
                home.P += 1
                away.P += 1
            }
        })
    })

    return Object.values(table).map((row) => ({
        ...row,
        SG: row.GM - row.GS,
    }))
    .sort((a, b) => {
        if(b.P !== a.P) return b.P - a.P
        if(b.V !== a.V) return b.V - a.V
        if(b.SG !== a.SG) return b.SG - a.SG
        return b.GM - a.GM
    })

}