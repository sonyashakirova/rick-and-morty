import { useSearchParams } from "react-router-dom"
import { List, Sort } from "../../components"
import episodes from "../../data/episode.json"
import { sortByDate } from "../../helpers/sort-by-date"

function EpisodeList() {
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
      <List category="episodes" items={sortedEpisodes} />
    </div>
  )
}

export default EpisodeList
