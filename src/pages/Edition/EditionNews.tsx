import { useParams } from "react-router-dom"
import styles from './EditionNews.module.css'
import { editionNewsData } from "../../data/editionNewsData"

const EditionNews = () => {
  const {editionID} = useParams()
  const news = editionNewsData[editionID ?? ""]

  if(!news){
    return null
  }

  return (
    <div className={styles.page}>
        <section className={styles.container}>
          {/* Coluna Principal */}
          <div className={styles.main}>
            <h2 className={styles.title}>Notícias</h2>

            {news.featured.map((item) => (
              <article key={item.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.date}>{item.date}</span>
                <p className={styles.summary}>{item.summary}</p>
              </article>
            ))}
          </div>

          {/* Coluna Lateral */}

          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Últimas Notícias</h3>

            <ul className={styles.list}>
              {news.latest.map((item) => (
                <li key={item.id} className={styles.listItem}>
                  <span>{item.title}</span>
                  <span className={styles.listDate}>{item.date}</span>
                </li>
              ))}

            </ul>
          </aside>

        </section>
    </div>
  )
}

export default EditionNews