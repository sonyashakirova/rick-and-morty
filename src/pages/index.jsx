import { Route, Routes } from "react-router-dom"
import { CharacterDetail } from "./character/character-detail"
import { CharacterList } from "./character/character-list"
import { EpisodeDetail } from "./episode/episode-detail"
import { EpisodeList } from "./episode/episode-list"
import { LocationDetail } from "./location/location-detail"
import { LocationList } from "./location/location-list"
import { NotFound } from "./not-found"
import { Home } from "./home"
import { Login } from "./login"
import { PrivateRoute } from "../components/private-route"

export function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/characters" element={<PrivateRoute />}>
        <Route index element={<CharacterList />} />
        <Route path=":id" element={<CharacterDetail />} />
      </Route>
      <Route path="/episodes" element={<PrivateRoute />}>
        <Route index element={<EpisodeList />} />
        <Route path=":id" element={<EpisodeDetail />} />
      </Route>
      <Route path="/locations" element={<PrivateRoute />}>
        <Route index element={<LocationList />} />
        <Route path=":id" element={<LocationDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
