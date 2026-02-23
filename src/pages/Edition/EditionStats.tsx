import { useParams } from "react-router-dom"
import StatsTable from "../../components/StatsTable/StatsTable"
import sortStats from "../../utils/sortStats"
import styles from './EditionStats.module.css'
import { editionStatsData } from "../../data/editionStatsData"
import EditionTheme from '../../layouts/EditionTheme/EditionTheme'

const EditionStats = () => {
  const {editionID} = useParams<{ editionID: string}>()
  const editionStats = editionStatsData[editionID ?? ""]

  if(!editionStats){
    return <p>Nenhuma estatística encontrada para esta edição.</p>
  }
  return (
    <EditionTheme>
    <div className={styles.page}>
        <StatsTable title="Artilharia" valueLabel="Gols" data={sortStats(editionStats.scorers)}/>
        <StatsTable title="Líderes de Assistências" valueLabel="Assistências" data={sortStats(editionStats.assists)}/>
    </div>
    </EditionTheme>
  )
}

export default EditionStats