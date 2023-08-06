import { lazy } from "react"
import { useParams } from "react-router-dom"
import { ErrorBoundary } from "../../components"
import locations from "../../data/location.json"

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
  const location = locations.find((item) => item.id.toString() === id)

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
        <LocationCard location={location} />
      </ErrorBoundary>
    </div>
  )
}

export default LocationDetail
