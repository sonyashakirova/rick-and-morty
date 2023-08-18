import { useSearchParams } from "react-router-dom"
import { Sort } from "../../components"
import { useInfinityScroll } from "shared/hooks"
import { ErrorBoundary, List } from "shared/ui"
import { sortByDate } from "shared/utils"

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
