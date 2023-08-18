import { useSearchParams } from "react-router-dom"
import { useInfinityScroll } from "shared/hooks"
import { ErrorBoundary, List, Sorting } from "shared/ui"
import { sortByDate } from "shared/utils"

function LocationList() {
  const {
    loading,
    error,
    items,
    lastNodeRef,
  } = useInfinityScroll("location")

  const [searchParams, setSearchParams] = useSearchParams({ sort: "ASC" })
  const sortingType = searchParams.get("sort")
  const sortedLocations = sortByDate(items, sortingType)

  return (
    <div className="content-wrapper">
      <h1 className="title">Locations</h1>
      <Sorting
        value={sortingType}
        onChange={(e) => setSearchParams({ sort: e.target.value })}
      />
      <ErrorBoundary>
        <List
          category="locations"
          items={sortedLocations}
          lastNodeRef={lastNodeRef}
          loading={loading}
          error={error}
        />
      </ErrorBoundary>
    </div>
  )
}

export default LocationList
