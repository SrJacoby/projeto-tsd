import { useParams } from 'react-router-dom'
import { useState } from 'react'
import styles from './EditionAwards.module.css'
import {  FaStar, FaChevronDown, FaChevronUp  } from 'react-icons/fa'
import{
  editionSelectionsData,
  type SelectionBlock,
  type SelectionPlayer
} from '../../data/editionSelectionsData'

export type AwardItem = {
  award: string
  player: string
  team: string
}

const awardsByEdition: Record<string, AwardItem[]> = {
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
    {award: "Artilheiro", player: "Noé da Ciranda (12)", team: "Portugal"},
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

const EditionAwards = () => {
  const {editionID} = useParams<{editionID: string}>()
  const awards = awardsByEdition[editionID ?? ""] ?? []
  const selections = editionSelectionsData[editionID ?? ""]

  const SelectionTable = ({
  title,
  players,
}: {
  title: string
  players: SelectionPlayer[]
}) => (
  <>
    <h3 className={styles.subtitle}>{title}</h3>

    <div className={styles.table}>
      <div className={`${styles.row} ${styles.header}`}>
        <span className={styles.left}>Posição</span>
        <span className={styles.center}>Nome</span>
        <span className={styles.right}>Time</span>
      </div>

      {players.map((player, index) => (
        <div key={index} className={styles.row}>
          <span className={styles.left}>{player.position}</span>
          <span className={styles.center}>
            {player.name || "-"}
            {player.isStar && <FaStar className={styles.star}/>}
          </span>
          <span className={styles.right}>{player.team || "-"}</span>
        </div>
      ))}
    </div>
  </>
)

const ToggleSelection = ({block}: {block: SelectionBlock}) => {
  const [open, setOpen] = useState(false)

  return(
    <div className={styles.card}>
      <button className={styles.cardHeader} onClick={() => setOpen(!open)}>
        <span>{block.title}</span>
        {open ? <FaChevronUp/> : <FaChevronDown/>}
      </button>

      {open && <SelectionTable title="" players={block.players}/>}
    </div>
  )
}

  return (
    <div className={styles.page}>
      {/* Premiações */}
      <section className={styles.container}>
        <h2 className={styles.title}>Premiações</h2>
        <div className={styles.table}>
          <div className={`${styles.row} ${styles.header}`}>
            <span className={styles.left}>Premiação</span>
            <span className={styles.center}>Nome</span>
            <span className={styles.right}>Time</span>
          </div>
          {awards.map((item, index) => (
            <div key={index} className={styles.row}>
              <span className={styles.left}>{item.award}</span>
              <span className={styles.center}>{item.player || "-"}</span>
              <span className={styles.right}>{item.team || "-"}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Seleções */}
        {selections && (
          <section className={styles.container}>
            <h2 className={styles.title}>Seleções</h2>
            {/* Seleção do Torneio */}
            <SelectionTable title='Seleção do Torneio' players={selections.tournamentSelection}/>

            {/* Rodadas */}
            {selections.rounds.map((round, index) => (
              <ToggleSelection key={`round-${index}`} block={round} />
            ))}

            {/* Mata-Mata */}
            {selections.knouckout.map((block, index) => (
              <ToggleSelection key={`knockout-${index}`} block={block} />
            ))}
          </section>
        )}
    </div>
  )
}

export default EditionAwards