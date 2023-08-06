import { useSearchParams } from "react-router-dom"
import { ErrorBoundary, List, Sort } from "../../components"
import locations from "../../data/location.json"
import { sortByDate } from "../../helpers/sort-by-date"

function LocationList() {
  const [searchParams, setSearchParams] = useSearchParams({ sort: "ASC" })
  const sortingType = searchParams.get("sort")
  const sortedLocations = sortByDate(locations, sortingType)

  return (
    <div className="content-wrapper">
      <h1 className="title">Locations</h1>
      <Sort
        value={sortingType}
        onChange={(e) => setSearchParams({ sort: e.target.value })}
      />
      <ErrorBoundary>
        <List category="locations" items={sortedLocations} />
      </ErrorBoundary>
    </div>
  )
}

export default LocationList
