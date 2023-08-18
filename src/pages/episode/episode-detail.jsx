import { lazy } from "react"
import { useParams } from "react-router-dom"
import { ErrorBoundary, Loading } from "../../components"
import { useGetItem } from "shared/hooks"
import { SuspenseRoute } from "shared/routing"

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
  const { item, loading, error } = useGetItem("episode", id)

  if (loading) return <Loading />

  if (error) {
    return (
      <SuspenseRoute>
        <NotFound />
      </SuspenseRoute>
    )
  }

  return (
    <div className="content-wrapper">
      <ErrorBoundary>
        <EpisodeCard episode={item} />
      </ErrorBoundary>
    </div>
  )
}

export default EpisodeDetail
