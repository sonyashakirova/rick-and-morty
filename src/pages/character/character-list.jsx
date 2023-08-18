import { useSearchParams } from "react-router-dom"
import { List, Sort } from "../../components"
import { useInfinityScroll } from "shared/hooks"
import { ErrorBoundary } from "shared/ui"
import { sortByDate } from "shared/utils"

function CharacterList() {
  const {
    loading,
    error,
    items,
    lastNodeRef,
  } = useInfinityScroll("character")

  const [searchParams, setSearchParams] = useSearchParams({ sort: "ASC" })
  const sortingType = searchParams.get("sort")
  const sortedCharacters = sortByDate(items, sortingType)

  return (
    <div className="content-wrapper">
      <h1 className="title">Characters</h1>
      <Sort
        value={sortingType}
        onChange={(e) => setSearchParams({ sort: e.target.value })}
      />
      <ErrorBoundary>
        <List
          category="characters"
          items={sortedCharacters}
          lastNodeRef={lastNodeRef}
          loading={loading}
          error={error}
        />
      </ErrorBoundary>
    </div>
  )
}

export default CharacterList
