export type EditionFormat = {
    groups: number
    qualifiersPerGroup: number
    bestThirds?: number
    hasThirdPlaceMatch: boolean
}

export const editionFormats: Record<string, EditionFormat> = {
    "1": {
        groups: 2,
        qualifiersPerGroup: 4,
        hasThirdPlaceMatch: true,
    },

    "2": {
        groups: 1,
        qualifiersPerGroup: 8,
        hasThirdPlaceMatch: false,
    },

    "3": {
        groups: 3,
        qualifiersPerGroup: 2,
        bestThirds: 2,
        hasThirdPlaceMatch: true,
    }
}