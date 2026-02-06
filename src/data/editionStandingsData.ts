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
    },

    "2": {
        groups: [
            {
                name: "Primeira Fase",
                teams: [
                    "Inglaterra",
                    "Portugal",
                    "Brasil",
                    "França",
                    "Espanha",
                    "Uruguai",
                    "Argentina",
                    "Itália",
                    "Rússia",
                    "Holanda",
                ],
            },
        ]
    },

    "3": {
        groups: [
            {
                name: "Grupo A",
                teams: [
                    "Brasil",
                    "França",
                    "Paraíba",
                    "Rio Grande do Sul",
                ],
            },
            {
                name: "Grupo B",
                teams: [
                    "Bahia",
                    "Itália",
                    "Minas Gerais",
                    "São Paulo",
                ],
            },
            {
                name: "Grupo C",
                teams: [
                    "Espanha",
                    "Pernambuco",
                    "Santa Catarina",
                ],
            },
        ]
    },

}