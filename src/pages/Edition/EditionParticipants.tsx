import { useParams } from "react-router-dom"
import styles from "./EditionParticipant.module.css"

type Participant = {
  name: string
  type: "country" | "state"
  code: string
}

const participantsByEdition: Record<string, Participant[]> = {
  "1": [
    {name: "Murillo", type: "country", code: "br"},
    {name: "Obalski", type: "country", code: "gb-eng"},
    {name: "Bono", type: "country", code: "fr"},
    {name: "Danicadeira", type: "country", code: "pt"},
    {name: "Flaminn", type: "country", code: "de"},
    {name: "Mmock", type: "country", code: "es"},
    {name: "Joj", type: "country", code: "it"},
    {name: "Fernando", type: "country", code: "nl"},
    {name: "Andriolo", type: "country", code: "uy"},
    {name: "Gimenez", type: "country", code: "ar"},
  ],

  "2": [
    {name: "Obalski", type: "country", code: "ar"},
    {name: "Suzuki", type: "country", code: "br"},
    {name: "Mmock", type: "country", code: "es"},
    {name: "Pedro", type: "country", code: "fr"},
    {name: "Gimenez", type: "country", code: "nl"},
    {name: "Cauã", type: "country", code: "gb-eng"},
    {name: "Jota", type: "country", code: "it"},
    {name: "Angelo", type: "country", code: "pt"},
    {name: "Fernando", type: "country", code: "ru"},
    {name: "Miguel", type: "country", code: "co"},
  ],

  "3": [
    {name: "Angelo", type: "state", code: "sc"},
    {name: "Davi", type: "country", code: "br"},
    {name: "Erik", type: "country", code: "it"},
    {name: "Fernando", type: "country", code: "fr"},
    {name: "Gimenez", type: "country", code: "es"},
    {name: "Miguel", type: "state", code: "pb"},
    {name: "João Daora", type: "state", code: "ba"},
    {name: "Mmock", type: "state", code: "pe"},
    {name: "Pedro", type: "state", code: "sp"},
    {name: "Obalski", type: "state", code: "rs"},
    {name: "Suzuki", type: "state", code: "mg"},
  ]
  
}

const EditionParticipant = () => {
  const {editionID} = useParams<{editionID: string}>()

  const participants = participantsByEdition[editionID ?? ""] ?? []

  const sortedParticipants = [...participants].sort((a, b) =>
  a.name.localeCompare(b.name, "pt-br")
  )

  return (
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
  )
}

export default EditionParticipant