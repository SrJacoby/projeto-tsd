import { Link } from 'react-router-dom'
import styles from './ChampionshipCard.module.css'

type ChampionshipCardProps = {
    title: string
    to: string
}

const ChampionshipCard = ( {title, to}: ChampionshipCardProps) => {
  return (
    <main>
      <Link to={to} className={styles.card}>
          <h2>{title}</h2>
      </Link>
    </main>
  )
}

export default ChampionshipCard