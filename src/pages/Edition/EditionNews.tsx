import { useParams } from "react-router-dom"
import { useState } from "react"
import styles from './EditionNews.module.css'
import { editionNewsData } from "../../data/editionNewsData"

const EditionNews = () => {
  const {editionID} = useParams()
  const news = editionNewsData[editionID ?? ""]
  const [openSummaries, setOpenSummaries] = useState<Record<string, boolean>>({})

  if(!news){
    return null
  }

  const toggleSummary = (id: string) => {
    setOpenSummaries((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className={styles.page}>
        <section className={styles.container}>
          {/* Coluna Principal */}
          <div className={styles.main}>
            <h2 className={styles.title}>Destaques</h2>

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
              {news.latest.map((item) => {
                const isOpen = !!openSummaries[item.id]
                
                return(
                  <li key={item.id} className={styles.listItem}>
                    <div className={styles.listHeader}>
                      <div className={styles.listText}>
                        <span>{item.title}</span>
                        <span className={styles.listDate}>{item.date}</span>
                      </div>
                      <button 
                        className={styles.toggleButton} 
                        onClick={() => toggleSummary(String(item.id))}
                      >
                        {isOpen ? "▲" : "▼"}
                      </button>
                    </div>

                    {isOpen && (
                      <p className={styles.listSummary}>{item.summary}</p>
                    )}
                  </li>
                )
              })}

            </ul>
          </aside>

        </section>
    </div>
  )
}

export default EditionNews