import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import EditionLayout from "./layouts/EditionLayout/EditionLayout"
import EditionHome from "./pages/Edition/EditionHome"
import EditionParticipants from "./pages/Edition/EditionParticipants"
import EditionStandings from "./pages/Edition/EditionStandings"
import EditionStats from "./pages/Edition/EditionStats"
import EditionNews from "./pages/Edition/EditionNews"
import EditionAwards from "./pages/Edition/EditionAwards"

function App() {
  return(
  <Routes>
    {/* Página inicial */}
    <Route path="/" element={<Home />}/>

    {/* Página das edições */}

    <Route path="/tsd/:editionID" element={<EditionLayout />}>
      <Route index element={<EditionHome />} />
      <Route path="participants" element={<EditionParticipants />} />
      <Route path="standings" element={<EditionStandings />} />
      <Route path="stats" element={<EditionStats />} />
      <Route path="news" element={<EditionNews />} />
      <Route path="awards" element={<EditionAwards />} />
    </Route>
  </Routes>
  )
}

export default App
