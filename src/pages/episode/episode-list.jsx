import { Flex, Title } from "@mantine/core"
import { useSearchParams } from "react-router-dom"
import { useInfinityScroll } from "shared/hooks"
import { ErrorBoundary, List, Sorting } from "shared/ui"
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
    <Flex direction="column" gap="md">
      <Title order={1}>Episodes</Title>
      <Sorting
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
    </Flex>
  )
}

export default EpisodeList
