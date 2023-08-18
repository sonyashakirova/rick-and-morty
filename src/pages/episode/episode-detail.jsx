import { Flex, Text, Title } from "@mantine/core"
import { lazy } from "react"
import { useParams } from "react-router-dom"
import { useGetItem } from "shared/hooks"
import { SuspenseRoute } from "shared/routing"
import { ErrorBoundary, Loading } from "shared/ui"

const NotFound = lazy(() => import("pages/not-found"))

function EpisodeCard({ episode }) {
  return (
    <Flex direction="column" gap="md">
      <Title>{episode.name}</Title>
      <Flex direction="column" gap={4}>
        <Text>Episode: {episode.episode}</Text>
        <Text>Air date: {episode.air_date}</Text>
      </Flex>
    </Flex>
  )
}

function EpisodeDetail() {
  const { id } = useParams()
  const { item, loading, error } = useGetItem("episode", id)

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
      <EpisodeCard episode={item} />
    </ErrorBoundary>
  )
}

export default EpisodeDetail
