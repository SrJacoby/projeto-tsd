import type { KnockoutMatch } from "./buildKnockout"

export interface KnockoutScores {
  quarterFinals: Partial<KnockoutMatch>[]
  semiFinals: Partial<KnockoutMatch>[]
  final: Partial<KnockoutMatch>
  thirdPlaceMatch?: Partial<KnockoutMatch>
}

export function applyKnockoutScores(
  knockout: {
    quarterFinals: KnockoutMatch[]
    semiFinals: KnockoutMatch[]
    final: KnockoutMatch
    thirdPlaceMatch?: KnockoutMatch
  },
  scores: KnockoutScores
) {
  return {
    quarterFinals: knockout.quarterFinals.map((match, i) => ({
      ...match,
      ...scores.quarterFinals[i],
    })),

    semiFinals: knockout.semiFinals.map((match, i) => ({
      ...match,
      ...scores.semiFinals[i],
    })),

    final: {
      ...knockout.final,
      ...scores.final,
    },

    thirdPlaceMatch:
      knockout.thirdPlaceMatch && scores.thirdPlaceMatch
        ? {
            ...knockout.thirdPlaceMatch,
            ...scores.thirdPlaceMatch,
          }
        : knockout.thirdPlaceMatch,
  }
}