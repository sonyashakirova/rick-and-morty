import { lazy } from "react"
import { useParams } from "react-router-dom"
import { ErrorBoundary } from "../../components"
import episodes from "../../data/episode.json"

const NotFound = lazy(() => import("../not-found"))

function EpisodeCard({ episode }) {
  return (
    <div>
      <h1 className="title">{episode.name}</h1>
      <p>Episode: {episode.episode}</p>
      <p>Air date: {episode.air_date}</p>
    </div>
  )
}

function EpisodeDetail() {
  const { id } = useParams()
  const episode = episodes.find((item) => item.id.toString() === id)

  if (!episode) {
    return (
      <SuspenseRoute>
        <NotFound />
      </SuspenseRoute>
    )
  }

  return (
    <div className="content-wrapper">
      <ErrorBoundary>
        <EpisodeCard episode={episode} />
      </ErrorBoundary>
    </div>
  )
}

export default EpisodeDetail
