import styles from "../Rankings.module.css"
import { editionSelectionsData} from "../../../data/editionSelectionsData"
import EditionTheme from '../../../layouts/EditionTheme/EditionTheme'
import { useNavigate } from "react-router-dom"
import type { SelectionBlock } from "../../../data/editionSelectionsData"

type ManagerCount = {
    name: string
    appearances: number
}

function getMostSelectedManagers(selections: SelectionBlock[]): ManagerCount[]{
    const map = new Map<string, number>()

    selections.forEach(({players}) => {
        players.forEach(({name, position}) => {
            if(!name || position !== "Treinador") return

            map.set(name, (map.get(name) ?? 0) + 1)
        })
    })

    return Array.from(map.entries())
        .map(([name, appearances]) => ({name, appearances}))
        .sort((a,b) =>
            b.appearances !== a.appearances
                ? b.appearances - a.appearances
                : a.name.localeCompare(b.name)
        )
}

export function MostSelectedManagers(){
    const allSelections = Object.values(editionSelectionsData).flatMap(edition => [...edition.rounds, ...edition.knockout])
    const managers = getMostSelectedManagers(allSelections)
    const navigate = useNavigate()

    return (
        <EditionTheme>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
            Voltar
        </button>
        <div className={styles.page}>
            <h1 className={styles.title}>Treinadores mais Escalados na Seleção da Rodada</h1>
            <div className={styles.table}>
                <div className={`${styles.row} ${styles.header}`}>
                    <span>Treinador</span>
                    <span>Aparições</span>
                </div>

                {managers.map((player, index) => (
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