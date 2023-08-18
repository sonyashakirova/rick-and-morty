import { Flex, Title } from "@mantine/core"
import { useSearchParams } from "react-router-dom"
import { useInfinityScroll } from "shared/hooks"
import { ErrorBoundary, List, Sorting } from "shared/ui"
import { sortByDate } from "shared/utils"

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
    <Flex direction="column" gap="md">
      <Title order={1}>Locations</Title>
      <Sorting
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
    </Flex>
  )
}

export default LocationList
