import { Flex, Title } from "@mantine/core"
import { useSearchParams } from "react-router-dom"
import { useInfinityScroll } from "shared/hooks"
import { ErrorBoundary, List, Sorting } from "shared/ui"
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
    <Flex direction="column" gap="md">
      <Title order={1}>Characters</Title>
      <Sorting
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
    </Flex>
  )
}

export default CharacterList
