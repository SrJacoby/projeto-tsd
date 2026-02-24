import styles from "../Rankings.module.css"
import { editionSelectionsData} from "../../../data/editionSelectionsData"
import EditionTheme from '../../../layouts/EditionTheme/EditionTheme'
import { useNavigate } from "react-router-dom"
import type { SelectionBlock } from "../../../data/editionSelectionsData"

type PlayerCount = {
    name: string
    appearances: number
}

function getMostSelectedPlayers(selections: SelectionBlock[]): PlayerCount[]{
    const map = new Map<string, PlayerCount>()
        selections.forEach((selection) => {
            selection.players.forEach((player) => {
                if(!player.name || player.position === "Treinador") return

                const key = `${player.name}`

                if (!map.has(key)){
                    map.set(key, {
                        name: player.name,
                        appearances: 1,
                    })
                } else {
                    map.get(key)!.appearances += 1
                }
            })
        })

    return Array.from(map.values()).sort((a, b) => {
        if(b.appearances !== a.appearances) {
            return b.appearances - a.appearances
        }

        return a.name.localeCompare(b.name)
    })
}

export function MostSelectedPlayers(){
    const allSelections = Object.values(editionSelectionsData).flatMap(edition => [...edition.rounds, ...edition.knockout])
    const players = getMostSelectedPlayers(allSelections)
    const navigate = useNavigate()

    return (
        <EditionTheme>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
            Voltar
        </button>
        <div className={styles.page}>
            <h1 className={styles.title}>Jogadores mais Escalados na Seleção da Rodada</h1>
            <div className={styles.table}>
                <div className={`${styles.row} ${styles.header}`}>
                    <span>Jogador</span>
                    <span>Aparições</span>
                </div>

                {players.map((player, index) => (
                    <div key={index} className={styles.row}>
                        <span>
                            {player.name}
                        </span>
                        <span>{player.appearances}</span>
                    </div>
                ))}
            </div>
        </div>
        </EditionTheme>
    )
}