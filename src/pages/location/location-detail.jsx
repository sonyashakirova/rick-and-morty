import { Flex, Text, Title } from "@mantine/core"
import { lazy } from "react"
import { useParams } from "react-router-dom"
import { useGetItem } from "shared/hooks"
import { SuspenseRoute } from "shared/routing"
import { ErrorBoundary, Loading } from "shared/ui"

const NotFound = lazy(() => import("pages/not-found"))

function LocationCard({ location }) {
  return (
    <Flex direction="column" gap="md">
      <Title>{location.name}</Title>
      <Flex direction="column" gap={4}>
        <Text>Type: {location.type}</Text>
        <Text>Dimension: {location.dimension}</Text>
      </Flex>
    </Flex>
  )
}

function LocationDetail() {
  const { id } = useParams()
  const { item, loading, error } = useGetItem("location", id)

  if (loading) return <Loading />

  if (error) {
    return (
      <SuspenseRoute>
        <NotFound />
      </SuspenseRoute>
    )
  }

  return (
    <ErrorBoundary>
      <LocationCard location={item} />
    </ErrorBoundary>
  )
}

export default LocationDetail
