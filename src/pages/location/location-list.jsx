import { Link, useSearchParams } from "react-router-dom"
import { Sort } from "../../components/sort"
import locations from "../../data/location.json"
import { sortByDate } from "../../helpers/sort-by-date"

export function LocationList() {
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
      <ul className="list">
        {sortedLocations.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/locations/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
