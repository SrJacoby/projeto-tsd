import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import EditionLayout from "./layouts/EditionLayout/EditionLayout"
import EditionHome from "./pages/Edition/EditionHome"
import EditionParticipants from "./pages/Edition/EditionParticipants"
import EditionStandings from "./pages/Edition/EditionStandings"
import EditionStatistics from "./pages/Edition/EditionStatistics"
import EditionNews from "./pages/Edition/EditionNews"
import EditionAwards from "./pages/Edition/EditionAwards"

function App() {
  return(
  <Routes>
    {/* Página inicial */}
    <Route path="/" element={<Home />}/>

    {/* Página das edições */}

    <Route path="/tsd/:editionID" element={<EditionLayout />}>
      <Route index element={<EditionHome/>}></Route>
      <Route path="participants" element={<EditionParticipants/>}></Route>
      <Route path="standings" element={<EditionStandings/>}></Route>
      <Route path="statistics" element={<EditionStatistics/>}></Route>
      <Route path="news" element={<EditionNews/>}></Route>
      <Route path="awards" element={<EditionAwards/>}></Route>
    </Route>
  </Routes>
  )
}

export default App
