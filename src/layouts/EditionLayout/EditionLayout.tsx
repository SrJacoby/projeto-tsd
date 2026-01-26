import { NavLink, Outlet, Link } from "react-router-dom"
import styles from './EditionLayout.module.css'

const EditionLayout = () => {
    const navLinkClass = ({ isActive} : {isActive: boolean}) => isActive ? `${styles.link} ${styles.active}` : styles.link

  return (
    <div className={styles.page}>
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                TSD
            </Link>
            <nav className={styles.nav}>
                <NavLink to="" end className={navLinkClass}>Início</NavLink>
                <NavLink to="participants" end className={navLinkClass}>Participantes</NavLink>
                <NavLink to="standings" end className={navLinkClass}>Tabela e Jogos</NavLink>
                <NavLink to="stats" end className={navLinkClass}>Estatísticas</NavLink>
                <NavLink to="news" end className={navLinkClass}>Notícias</NavLink>
                <NavLink to="awards" end className={navLinkClass}>Premiações</NavLink>
            </nav>
        </header>
        <main className="styles.content">
            <Outlet/>
        </main>

    </div>
  )
}

export default EditionLayout