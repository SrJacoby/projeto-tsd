export type NewsItem = {
    id: number
    title: string
    summary: string
    date: string
}

export type EditionNewsData = {
    featured: NewsItem[]
    latest: NewsItem[]
}

export const editionNewsData: Record<string, EditionNewsData> = {
    "1": {
        featured: [
            {
                id: 1,
                title: "Itália avança para a final em partida polêmica",
                summary: "Em jogo marcado por polêmicas, Itália derrota a Inglaterra e enfrentará a Alemanha.",
                date: "28/02/2022"
            },
            {
                id: 2,
                title: "Itália vence Alemanha na final",
                summary: "Em jogo disputado no Maracanã, Itália vence a Alemanha por 1x0 e se sagra campeã do TSD 1.",
                date: "01/03/2022"
            },
            {
                id: 3,
                title: "Vardy vence o prêmio de melhor jogador do torneio",
                summary: "Com seus oito gols marcados, Vardy é eleito o craque do TSD 1.",
                date: "01/03/2022"
            },
        ],

        latest: [
            {
                id: 1, 
                title: "Notícia recente 1", 
                summary: "Descrição notícia recente 1",
                date: "02/02/2022"
            },
            {
                id: 2, 
                title: "Notícia recente 2", 
                summary: "Descrição notícia recente 2",
                date: "02/02/2022"
            },
            {
                id: 3, 
                title: "Notícia recente 3", 
                summary: "Descrição notícia recente 3",
                date: "02/02/2022"
            },
            {
                id: 4, 
                title: "Notícia recente 4", 
                summary: "Descrição notícia recente 4",
                date: "02/02/2022"
            },
        ]
    },

    "2": {
        featured: [
            {
                id: 1,
                title: "Argentina eliminada em jogo dramático",
                summary: "Mesmo após empatar no último lance do tempo normal e levar o jogo para prorrogação, os argentinos são batidos pela França.",
                date: "08/03/2023"
            },

            {
                id: 2,
                title: "Brasil é campeão do TSD 2",
                summary: "Brasil bate a França no Saitama Stadium e é campeão do torneio.",
                date: "10/03/2023"
            },

            {
                id: 3,
                title: "Zidane craque do torneio",
                summary: "O jogador francês é eleito o craque do campeonato.",
                date: "10/03/2023"
            },
        ],

        latest: [
            {
                id: 1, 
                title: "Notícia recente 1", 
                summary: "Descrição notícia recente 1",
                date: "02/02/2023"
            },
            {
                id: 2, 
                title: "Notícia recente 2", 
                summary: "Descrição notícia recente 2",
                date: "02/02/2023"
            },
            {
                id: 3, 
                title: "Notícia recente 3", 
                summary: "Descrição notícia recente 3",
                date: "02/02/2023"
            },
            {
                id: 4, 
                title: "Notícia recente 4", 
                summary: "Descrição notícia recente 4",
                date: "02/02/2023"
            },
        ]
    },

    "3": {
        featured: [
            {
                id: 1,
                title: "Noé da Ciranda eterno!",
                summary: "Homenagem ao jogador que faleceu dois dias após ter conquistado o terceiro lugar do TSD 3 com a seleção de Pernambuco e ter sido artilheiro e melhor jogador da competição.",
                date: "29/09/2025"
            },

            {
                id: 2,
                title: "Brasil é campeão do TSD 3",
                summary: "Em jogo marcado por falhas dos goleiros, Brasil vence a Bahia por 2x1 e leva o bicampeonato.",
                date: "28/09/2025"
            },

            {
                id: 3,
                title: "Pernambuco fica com o terceiro lugar",
                summary: "Em uma partida movimentada, Pernambuco bate a Espanha por 4x3 e fica com o terceiro lugar.",
                date: "28/09/2025"
            },
        ],

        latest: [
            {
                id: 1, 
                title: "Notícia recente 1", 
                summary: "Descrição notícia recente 1",
                date: "02/09/2025"
            },
            {
                id: 2, 
                title: "Notícia recente 2", 
                summary: "Descrição notícia recente 2",
                date: "02/09/2025"
            },
            {
                id: 3, 
                title: "Notícia recente 3", 
                summary: "Descrição notícia recente 3",
                date: "02/09/2025"
            },
            {
                id: 4, 
                title: "Notícia recente 4", 
                summary: "Descrição notícia recente 4",
                date: "02/09/2025"
            },
        ]
    },
}