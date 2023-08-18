import { useSearchParams } from "react-router-dom"
import { ErrorBoundary, List, Sort } from "../../components"
import { sortByDate } from "../../helpers/sort-by-date"
import { useInfinityScroll } from "shared/hooks"

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
      <Sort
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
