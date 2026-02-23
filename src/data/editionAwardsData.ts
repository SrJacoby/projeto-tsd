export type AwardItem = {
  award: string
  player: string
  team: string
}

export const editionAwardsData: Record<string, AwardItem[]> = {
  "1": [
    {award: "Melhor Jogador", player: "Vardy", team: "Inglaterra"},
    {award: "Artilheiro", player: "Vardy (8)", team: "Inglaterra"},
    {award: "Líder de Assistências", player: "Beckham e Sané (4)", team: "Inglaterra e Alemanha"},
    {award: "Melhor Goleiro", player: "Muslera", team: "Uruguai"},
    {award: "Melhor Zagueiro", player: "Rüdiger", team: "Alemanha"},
    {award: "Melhor Meia", player: "Valverde", team: "Uruguai"},
    {award: "Melhor Atacante", player: "Vardy", team: "Inglaterra"},
    {award: "Melhor Treinador", player: "Flaminn", team: "Alemanha"},
    {award: "Melhor Estrangeiro", player: "Salah", team: "Itália"},
    {award: "Melhor Legend", player: "Van Basten", team: "Holanda"},
    {award: "Melhor Jovem", player: "Valverde", team: "Uruguai"},
    {award: "Treinador mais Participativo", player: "Murillo", team: "Brasil"},
  ],

  "2": [
    {award: "Melhor Jogador", player: "Zidane", team: "França"},
    {award: "Artilheiro", player: "Cristiano Ronaldo (8)", team: "Portugal"},
    {award: "Líder de Assistências", player: "Zidane (5)", team: "França"},
    {award: "Melhor Goleiro", player: "Courtois", team: "Argentina"},
    {award: "Melhor Zagueiro", player: "Ivan Drago", team: "Rússia e Brasil"},
    {award: "Melhor Meia", player: "Zidane", team: "França"},
    {award: "Melhor Atacante", player: "Cristiano Ronaldo", team: "Portugal"},
    {award: "Melhor Treinador", player: "Suzuki", team: "Brasil"},
    {award: "Melhor Estrangeiro", player: "Son", team: "Espanha"},
    {award: "Melhor Legend", player: "Zidane", team: "França"},
    {award: "Melhor Jovem", player: "Vinicius Kindle", team: "Holanda e Inglaterra"},
    {award: "Melhor Jogador Criado", player: "Ivan Drago", team: "Rússia e Brasil"},
  ],

  "3": [
    {award: "Melhor Jogador", player: "Noé da Ciranda", team: "Pernambuco"},
    {award: "Artilheiro", player: "Noé da Ciranda (12)", team: "Pernambuco"},
    {award: "Líder de Assistências", player: "Bebeto e Dani Olmo (4)", team: "Bahia e Espanha"},
    {award: "Gravata de Ouro", player: "Davi", team: "Brasil"},
    {award: "Criado de Ouro", player: "Noé da Ciranda", team: "Pernambuco"},
    {award: "Naturalização de Ouro", player: "Maradona", team: "Bahia"},
    {award: "Luva de Ouro", player: "Rogério Ceni", team: "Brasil"},
    {award: "ENEM de Ouro", player: "Pedro Imperial", team: "Brasil"},
    {award: "INSS de Ouro", player: "Ademir de Menezes", team: "Pernambuco"},
    {award: "Ibrahimovic - Gol mais Bonito", player: "Raphinha", team: "Rio Grande do Sul"},
  ]
}