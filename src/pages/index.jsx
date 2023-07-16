import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CharacterDetail } from "./character/character-detail"
import { CharacterList } from "./character/character-list"
import { EpisodeDetail } from "./episode/episode-detail"
import { EpisodeList } from "./episode/episode-list"
import { NotFound } from "./not-found"
import { Home } from "./home"

export function Pages() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters">
            <Route index element={<CharacterList />} />
            <Route path=":id" element={<CharacterDetail />} />
          </Route>
          <Route path="/episodes">
            <Route index element={<EpisodeList />} />
            <Route path=":id" element={<EpisodeDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
