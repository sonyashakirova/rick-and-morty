import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { PrivateRoute, SuspenseRoute } from "shared/routing"

const Home = lazy(() => import("./home"))
const Login = lazy(() => import("./login"))
const CharacterDetail = lazy(() => import("./character/character-detail"))
const CharacterList = lazy(() => import("./character/character-list"))
const EpisodeDetail = lazy(() => import("./episode/episode-detail"))
const EpisodeList = lazy(() => import("./episode/episode-list"))
const LocationDetail = lazy(() => import("./location/location-detail"))
const LocationList = lazy(() => import("./location/location-list"))
const NotFound = lazy(() => import("./not-found"))

export function Pages() {
  return (
    <Routes>
      <Route element={<SuspenseRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
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
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
