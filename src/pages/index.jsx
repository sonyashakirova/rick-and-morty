import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { PrivateRoute, SuspenseRoute } from "shared/routing"
import { PageLayout } from "shared/ui"

const Home = lazy(() => import("pages/home"))
const Login = lazy(() => import("pages/login"))
const CharacterDetail = lazy(() => import("pages/character/character-detail"))
const CharacterList = lazy(() => import("pages/character/character-list"))
const EpisodeDetail = lazy(() => import("pages/episode/episode-detail"))
const EpisodeList = lazy(() => import("pages/episode/episode-list"))
const LocationDetail = lazy(() => import("pages/location/location-detail"))
const LocationList = lazy(() => import("pages/location/location-list"))
const NotFound = lazy(() => import("pages/not-found"))

export function Pages() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
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
      </Route>
    </Routes>
  )
}
