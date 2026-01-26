import { useParams } from "react-router-dom"
import StatsTable from "../../components/StatsTable/StatsTable"
import type { StatItem } from "../../types/stats"
import sortStats from "../../utils/sortStats"
import styles from './EditionsStats.module.css'

type EditionsStatsData = {
  scorers: StatItem[]
  assists: StatItem[]
}

const statsByEdition: Record<string, EditionsStatsData> = {
  "1": {
    scorers: [
      {team: "Inglaterra", player: "Vardy", value: 8},
      {team: "Holanda", player: "Van Basten", value: 6},
      {team: "Alemanha", player: "Werner", value: 6},
      {team: "Portugal", player: "Cristiano Ronaldo", value: 5},
      {team: "Itália", player: "Immobile", value: 5},
      {team: "Inglaterra", player: "Kane", value: 5},
    ],

    assists: [
      {team: "Inglaterra", player: "Vardy", value: 4},
      {team: "Alemanha", player: "Sané", value: 4},
      {team: "Brasil", player: "Pelé", value: 3},
      {team: "Inglaterra", player: "Sterling", value: 3},
      {team: "Holanda", player: "Wijnaldum", value: 3},
    ]
  },

  "2": {
    scorers: [
      {team: "Portugal", player: "Cristiano Ronaldo", value: 8},
      {team: "Argentina", player: "Lukaku", value: 6},
      {team: "Uruguai", player: "Suárez", value: 6},
      {team: "França", player: "Benzema", value: 5},
      {team: "Brasil", player: "Lewandowski", value: 5},
      {team: "França", player: "Mbappé", value: 5},
      {team: "Inglaterra", player: "Werner", value: 5},
    ],

    assists: [
      {team: "França", player: "Zidane", value: 4},
      {team: "Holanda", player: "Depay", value: 4},
      {team: "Inglaterra", player: "Goretzka", value: 3},
      {team: "Inglaterra", player: "Kroos", value: 3},
      {team: "Brasil", player: "Pelé", value: 3},
    ]
  },

  "3": {
    scorers: [
      {team: "Pernambuco", player: "Noé da Ciranda", value: 12},
      {team: "Pernambuco", player: "Ademir de Menezes", value: 7},
      {team: "Brasil", player: "Ronaldo", value: 7},
      {team: "Bahia", player: "Edílson", value: 6},
      {team: "Paraíba", player: "Hulk", value: 6},
      {team: "Bahia", player: "Maradona", value: 6},
      {team: "Bahia", player: "Talisca", value: 6},
    ],

    assists: [
      {team: "Bahia", player: "Bebeto", value: 4},
      {team: "Espanha", player: "Dani Olmo", value: 4},
      {team: "Itália", player: "Baggio", value: 3},
      {team: "Brasil", player: "Garrincha", value: 3},
      {team: "Itália", player: "Giuseppe Meazza", value: 3},
      {team: "Pernambuco", player: "Juninho Pernambucano", value: 3},
      {team: "Paraíba", player: "Júnior", value: 3},
      {team: "São Paulo", player: "Raí", value: 3},
      {team: "Rio Grande do Sul", player: "Renato Portaluppi", value: 3},
      {team: "Santa Catarina", player: "Valdomiro", value: 3},
      {team: "Espanha", player: "Yamal", value: 3},
      {team: "Brasil", player: "Zico", value: 3},
    ]
  },
}

const EditionStats = () => {
  const {editionID} = useParams<{ editionID: string}>()
  const editionStats = statsByEdition[editionID ?? ""]

  if(!editionStats){
    return <p>Nenhuma estatística encontrada para esta edição.</p>
  }
  return (
    <div className={styles.page}>
        <StatsTable title="Artilharia" valueLabel="Gols" data={sortStats(editionStats.scorers)}/>
        <StatsTable title="Líderes de Assistências" valueLabel="Assistências" data={sortStats(editionStats.assists)}/>
    </div>
  )
}

export default EditionStats