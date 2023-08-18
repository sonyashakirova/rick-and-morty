import { lazy } from "react"
import { useParams } from "react-router-dom"
import { ErrorBoundary, Loading } from "../../components"
import { useGetItem } from "shared/hooks"

const NotFound = lazy(() => import("../not-found"))

function LocationCard({ location }) {
  return (
    <div>
      <h1 className="title">{location.name}</h1>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
    </div>
  )
}

function LocationDetail() {
  const { id } = useParams()
  const { item, loading, error } = useGetItem("location", id)

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
        <LocationCard location={item} />
      </ErrorBoundary>
    </div>
  )
}

export default LocationDetail
