import { NavLink, Outlet, Link } from "react-router-dom"
import styles from "./EditionLayout.module.css"
import EditionTheme from "../EditionTheme/EditionTheme"

const EditionLayout = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link

  return (
    <EditionTheme>
      <div className={styles.page}>
        <header className={styles.header}>
          <Link to="/" className={styles.logo}>
            TSD
          </Link>

          <nav className={styles.nav}>
            <NavLink to="" end className={navLinkClass}>Início</NavLink>
            <NavLink to="participants" className={navLinkClass}>Participantes</NavLink>
            <NavLink to="standings" className={navLinkClass}>Tabela e Jogos</NavLink>
            <NavLink to="stats" className={navLinkClass}>Estatísticas</NavLink>
            <NavLink to="news" className={navLinkClass}>Notícias</NavLink>
            <NavLink to="awards" className={navLinkClass}>Premiações</NavLink>
          </nav>
        </header>

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </EditionTheme>
  )
}

export default EditionLayout