export type EditionTheme = {
  accent: string
  accentStrong: string
  cardBg: string
  text: string
  textStrong: string
  textSoft: string
  divider: string
}

export const editionThemes: Record<string, EditionTheme> = {
  "1": {
    // TSD 1 - Vermelho
    accent: "#e07a7a",
    accentStrong: "#c85555",
    cardBg: "#fdecec",
    text: "#5f2a2a",
    textStrong: "#7a1f1f",
    textSoft: "#9b5a5a",
    divider: "#f2caca",
  },

  "2": {
    // TSD 2 - Azul
    accent: "#6fa8dc",
    accentStrong: "#4f8fc8",
    cardBg: "#e8f1fb",
    text: "#243f5a",
    textStrong: "#1f4e79",
    textSoft: "#5c7fa3",
    divider: "#cfe0f2",
  },

  "3": {
    // TSD 3 - Verde
    accent: "#7fbf9a",
    accentStrong: "#5fa883",
    cardBg: "#e7f5ec",
    text: "#244c3a",
    textStrong: "#1f5e3b",
    textSoft: "#5e8f78",
    divider: "#cfe7da",
  },
}
