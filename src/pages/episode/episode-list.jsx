import { Link, useSearchParams } from "react-router-dom"
import episodes from "../../data/episode.json"
import { sortByDate } from "../../helpers/sort-by-date"
import { Sort } from "../../components/sort"

export function EpisodeList() {
  const [searchParams, setSearchParams] = useSearchParams({ sort: "ASC" })
  const sortingType = searchParams.get("sort")
  const sortedEpisodes = sortByDate(episodes, sortingType)

  return (
    <div className="content-wrapper">
      <h1 className="title">Episodes</h1>
      <Sort
        value={sortingType}
        onChange={(e) => setSearchParams({ sort: e.target.value })}
      />
      <ul className="list">
        {sortedEpisodes.map(({ id, name, episode }) => (
          <li key={id}>
            <Link to={`/episodes/${id}`}>{name} ({episode})</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
