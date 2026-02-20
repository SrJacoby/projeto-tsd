import type { KnockoutScores } from "../utils/applyKnockoutScores"

export const editionKnockoutData: Record<string, KnockoutScores> = {
  "1": {
    quarterFinals: [
      { homeGoals: 3, awayGoals: 0 },
      { homeGoals: 1, awayGoals: 0 },
      { homeGoals: 1, awayGoals: 1, homePenalties: 2, awayPenalties: 3 },
      { homeGoals: 0, awayGoals: 1 },
    ],
    semiFinals: [
      { homeGoals: 1, awayGoals: 0 },
      { homeGoals: 0, awayGoals: 0, homePenalties: 3, awayPenalties: 1 },
    ],
    thirdPlaceMatch: {
      homeGoals: 2,
      awayGoals: 1,
    },
    final: {
        homeGoals: 0,
        awayGoals: 1
    }
  },
  "2": {
    quarterFinals: [
      { homeGoals: 1, awayGoals: 0 },
      { homeGoals: 0, awayGoals: 1 },
      { homeGoals: 0, awayGoals: 1 },
      { homeGoals: 2, awayGoals: 3 },
    ],
    semiFinals: [
      { homeGoals: 0, awayGoals: 1 },
      { homeGoals: 1, awayGoals: 0 },
    ],
    final: {
        homeGoals: 1,
        awayGoals: 0
    }
  },
  "3": {
    quarterFinals: [
      { homeGoals: 2, awayGoals: 1 },
      { homeGoals: 2, awayGoals: 2, homePenalties: 2, awayPenalties: 0 },
      { homeGoals: 1, awayGoals: 2},
      { homeGoals: 0, awayGoals: 1 },
    ],
    semiFinals: [
      { homeGoals: 4, awayGoals: 3 },
      { homeGoals: 1, awayGoals: 2 },
    ],
    thirdPlaceMatch: {
      homeGoals: 4,
      awayGoals: 3,
    },
    final: {
        homeGoals: 1,
        awayGoals: 2
    }
  },
}