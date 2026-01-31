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
                title: "Notícia destaque 1",
                summary: "Descrição notícia destaque 1",
                date: "02/02/2022"
            },

            {
                id: 2,
                title: "Notícia destaque 2",
                summary: "Descrição notícia destaque 2",
                date: "02/02/2022"
            },

            {
                id: 3,
                title: "Notícia destaque 3",
                summary: "Descrição notícia destaque 3",
                date: "02/02/2022"
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
                title: "Notícia destaque 1",
                summary: "Descrição notícia destaque 1",
                date: "02/02/2023"
            },

            {
                id: 2,
                title: "Notícia destaque 2",
                summary: "Descrição notícia destaque 2",
                date: "02/02/2023"
            },

            {
                id: 3,
                title: "Notícia destaque 3",
                summary: "Descrição notícia destaque 3",
                date: "02/02/2023"
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
                title: "Notícia destaque 1",
                summary: "Descrição notícia destaque 1",
                date: "02/09/2025"
            },

            {
                id: 2,
                title: "Notícia destaque 2",
                summary: "Descrição notícia destaque 2",
                date: "02/09/2025"
            },

            {
                id: 3,
                title: "Notícia destaque 3",
                summary: "Descrição notícia destaque 3",
                date: "02/09/2025"
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