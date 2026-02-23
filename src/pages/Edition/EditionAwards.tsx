import { useParams } from 'react-router-dom'
import { useState } from 'react'
import styles from './EditionAwards.module.css'
import {  FaStar, FaChevronDown, FaChevronUp  } from 'react-icons/fa'
import{
  editionSelectionsData,
  type SelectionBlock,
  type SelectionPlayer
} from '../../data/editionSelectionsData'
import { editionAwardsData } from '../../data/editionAwardsData'
import EditionTheme from '../../layouts/EditionTheme/EditionTheme'


const EditionAwards = () => {
  const {editionID} = useParams<{editionID: string}>()
  const awards = editionAwardsData[editionID ?? ""] ?? []
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
    <EditionTheme>
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
    </EditionTheme>
  )
}

export default EditionAwards