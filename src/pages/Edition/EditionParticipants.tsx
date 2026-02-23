import { useParams } from "react-router-dom"
import styles from "./EditionParticipant.module.css"
import { editionParticipantsData } from "../../data/editionParticipantsData"
import EditionTheme from '../../layouts/EditionTheme/EditionTheme'

const EditionParticipant = () => {
  const {editionID} = useParams<{editionID: string}>()

  const participants = editionParticipantsData[editionID ?? ""] ?? []

  const sortedParticipants = [...participants].sort((a, b) =>
  a.name.localeCompare(b.name, "pt-br")
  )

  return (
    <EditionTheme>
    <section className={styles.container}>
      <h2 className={styles.title}>Participantes</h2>

      {sortedParticipants.length === 0 ? (
        <p>Nenhum participante encontrado!</p>
      ) : (
        <ul className={styles.list}>
          {sortedParticipants.map((participant) => {
            const flagSrc = participant.type === "country" ? `https://flagcdn.com/w20/${participant.code}.png` : `/flags/${participant.code}.svg`

            return (
              <li key={participant.name} className={styles.item}>
                <img src={flagSrc} alt={`Bandeira ${participant.code}`} className={styles.flag} />
                <span className={styles.name}>{participant.name}</span>
              </li>
            )
          })}
        </ul>
      )}
    </section>
    </EditionTheme>
  )
}

export default EditionParticipant