import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom"
import { CharacterDetail } from "./character/character-detail"
import { CharacterList } from "./character/character-list"
import { EpisodeDetail } from "./episode/episode-detail"
import { EpisodeList } from "./episode/episode-list"
import { LocationDetail } from "./location/location-detail"
import { LocationList } from "./location/location-list"
import { NotFound } from "./not-found"
import { Home } from "./home"

export function Pages() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <nav className="navbar">
          <ul className="list">
            <li>
              <Link to="/">
                <img className="logo" src="../images/logo.png" alt="Home" />
              </Link>
            </li>
            <li><NavLink to="/characters">Characters</NavLink></li>
            <li><NavLink to="/episodes">Episodes</NavLink></li>
            <li><NavLink to="/locations">Locations</NavLink></li>
          </ul>
        </nav>
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
          <Route path="/locations">
            <Route index element={<LocationList />} />
            <Route path=":id" element={<LocationDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
