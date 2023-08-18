import { useSearchParams } from "react-router-dom"
import { ErrorBoundary, List, Sort } from "../../components"
import { sortByDate } from "../../helpers/sort-by-date"
import { useInfinityScroll } from "shared/hooks"

function EpisodeList() {
  const {
    loading,
    error,
    items,
    lastNodeRef,
  } = useInfinityScroll("episode")

  const [searchParams, setSearchParams] = useSearchParams({ sort: "ASC" })
  const sortingType = searchParams.get("sort")
  const sortedEpisodes = sortByDate(items, sortingType)

  return (
    <div className="content-wrapper">
      <h1 className="title">Episodes</h1>
      <Sort
        value={sortingType}
        onChange={(e) => setSearchParams({ sort: e.target.value })}
      />
      <ErrorBoundary>
        <List
          category="episodes"
          items={sortedEpisodes}
          lastNodeRef={lastNodeRef}
          loading={loading}
          error={error}
        />
      </ErrorBoundary>
    </div>
  )
}

export default EpisodeList
