export type Group = {
    name: string
    teams: string[]
}

export type EditionStandingsData = {
    groups: Group[]
}

export const editionStandingsData: Record<string, EditionStandingsData> = {
    "1": {
        groups: [
            {
                name: "Grupo A",
                teams: [
                    "Alemanha",
                    "França",
                    "Espanha",
                    "Itália",
                    "Argentina"
                ],
            },
            {
                name: "Grupo B",
                teams: [
                    "Holanda",
                    "Uruguai",
                    "Inglaterra",
                    "Portugal",
                    "Brasil"
                ],
            },
        ]
    }
}