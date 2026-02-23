import { useParams } from "react-router-dom" 
import { editionThemes } from "../../data/editionThemesData" 
import "./EditionTheme.css" 

type Props = { children?: React.ReactNode } 

const EditionLayout = ({ children }: Props) => 
  { const { editionID } = useParams<{ editionID: string }>() 
  const theme = editionThemes[editionID ?? ""] 
  const styleVars = theme ? 
  { "--edition-accent": theme.accent, 
    "--edition-accent-strong": theme.accentStrong, 
    "--edition-card-bg": theme.cardBg, 
    "--edition-text": theme.text, 
    "--edition-text-strong": theme.textStrong, 
    "--edition-text-soft": theme.textSoft,
     "--edition-divider": theme.divider, } : {} 
  return ( 
    <div className="edition-page"  style={styleVars as React.CSSProperties} > {children} </div> 
  ) } 
export default EditionLayout