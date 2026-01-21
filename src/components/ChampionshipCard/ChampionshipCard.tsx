import { Link } from 'react-router'
import styles from './ChampionshipCard.module.css'

type ChampionshipCardProps = {
    title: string
}

const ChampionshipCard = ( {title}: ChampionshipCardProps) => {
  return (
    <main>
      <Link to={"/"} className={styles.card}>
          <h2>{title}</h2>
      </Link>
    </main>
  )
}

export default ChampionshipCard