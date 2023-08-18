import { Flex, Image, Text, Title } from "@mantine/core"
import { lazy } from "react"
import { useParams } from "react-router-dom"
import { useGetItem } from "shared/hooks"
import { SuspenseRoute } from "shared/routing"
import { ErrorBoundary, Loading } from "shared/ui"

const NotFound = lazy(() => import("pages/not-found"))

function CharacterCard({ character }) {
  return (
    <Flex direction="column" gap="md">
      <Title>{character.name}</Title>
      <Image
        src={character.image}
        alt={character.name}
        width={220}
        height={220}
        radius="md"
      />
      <Flex direction="column" gap={4}>
        <Text>Status: {character.status}</Text>
        <Text>Species: {character.species}</Text>
        {character.type && <Text>Type: {character.type}</Text>}
        <Text>Gender: {character.gender}</Text>
      </Flex>
    </Flex>
  )
}

function CharacterDetail() {
  const { id } = useParams()
  const { item, loading, error } = useGetItem("character", id)

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
      <CharacterCard character={item} />
    </ErrorBoundary>
  )
}

export default CharacterDetail
