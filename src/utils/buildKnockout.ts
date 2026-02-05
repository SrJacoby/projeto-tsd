type KnockoutMatch = {
    home: string
    away: string
    homeGoals: number | null
    awayGoals: number | null
    homePenalties?: number | null
    awayPenalties?: number | null
}

const winner = (match: KnockoutMatch) => {
    if(match.homeGoals === null || match.awayGoals === null){
        return null
    }

    if (match.homeGoals > match.awayGoals) return match.home
    if (match.awayGoals > match.homeGoals) return match.away

    if(
        match.homePenalties !== null &&
        match.homePenalties !== undefined &&
        match.awayPenalties !== null &&
        match.awayPenalties !== undefined
    ) {
        return match.homePenalties > match. awayPenalties ? match.home : match.away
    }

    return null
}

export const buildKnockout = (
    groupA: string[],
    groupB: string[],
) => {
    const quarterFinals: KnockoutMatch[] = [
        {
            home: groupA[0], 
            away: groupB[3], 
            homeGoals: 3, 
            awayGoals: 0
        },
        {
            home: groupB[1], 
            away: groupA[2], 
            homeGoals: 1, 
            awayGoals: 0
        },
        {
            home: groupB[0], 
            away: groupA[3], 
            homeGoals: 1, 
            awayGoals: 1, 
            homePenalties: 2, 
            awayPenalties: 3},
        {
            home: groupA[1], 
            away: groupB[2], 
            homeGoals: 0, 
            awayGoals: 1},
    ]

    const semiFinals: KnockoutMatch[] = [
        {
            home: winner(quarterFinals[0]) ?? "A definir",
            away: winner(quarterFinals[1]) ?? "A definir",
            homeGoals: 0,
            awayGoals: 0,
            homePenalties: 3, 
            awayPenalties: 1
        },

        {
            home: winner(quarterFinals[2]) ?? "A definir",
            away: winner(quarterFinals[3]) ?? "A definir",
            homeGoals: 2,
            awayGoals: 1,
        },
    ]

    const final: KnockoutMatch = {
            home: winner(semiFinals[0]) ?? "A definir",
            away: winner(semiFinals[1]) ?? "A definir",
            homeGoals: 0,
            awayGoals: 1,
        }

    return{
        quarterFinals, semiFinals, final
    }
}