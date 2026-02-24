import ChampionshipCard from "../../components/ChampionshipCard/ChampionshipCard"
import styles from "./Home.module.css"
import EditionTheme from '../../layouts/EditionTheme/EditionTheme'

const Home = () => {
  return (
    <EditionTheme>
    <main className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.title}>Escolha uma Opção:</h1>

        <div className={styles.cards}>
          <ChampionshipCard title="TSD 1" to="/tsd/1" />
          <ChampionshipCard title="TSD 2" to="/tsd/2" />
          <ChampionshipCard title="TSD 3" to="/tsd/3" />
          <ChampionshipCard title="Ranking Jogadores" to="/ranking-players" />
          <ChampionshipCard title="Ranking Treinadores" to="/ranking-managers" />
        </div>
      </section>
    </main>
    </EditionTheme>
  )
}

export default Home