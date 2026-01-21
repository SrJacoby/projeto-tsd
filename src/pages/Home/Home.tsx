import ChampionshipCard from "../../components/ChampionshipCard/ChampionshipCard"
import styles from './Home.module.css'

const Home = () => {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <h1>Escolha uma Edição:</h1>
        <div className={styles.cards}>
          <ChampionshipCard title="TSD 1"/>
          <ChampionshipCard title="TSD 2"/>
          <ChampionshipCard title="TSD 3"/>
        </div>
      </section>
    </main>
  )
}

export default Home