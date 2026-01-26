import styles from './StatsTable.module.css'
import type { StatItem } from "../../types/stats"

type StatsTableProps = {
    title: string
    valueLabel: string
    data: StatItem[]
}

const StatsTable = ({title, valueLabel, data}: StatsTableProps) => {
  return (
    <section className={styles.container}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.table}>
            <div className={`${styles.row} ${styles.header}`}>
                <span className={styles.left}>Time</span>
                <span className={styles.center}>Jogador</span>
                <span className={styles.right}>{valueLabel}</span>
            </div>

            {data.map((item) => (
                <div key={item.player} className={styles.row}>
                    <span className={styles.left}>{item.team}</span>    
                    <span className={styles.center}>{item.player}</span>
                    <span className={styles.right}>{item.value}</span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default StatsTable