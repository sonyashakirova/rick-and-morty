import { lazy } from "react"
import { useParams } from "react-router-dom"
import { useGetItem } from "shared/hooks"
import { SuspenseRoute } from "shared/routing"
import { ErrorBoundary, Loading } from "shared/ui"

const NotFound = lazy(() => import("../not-found"))

function CharacterCard({ character }) {
  return (
    <div>
      <h1 className="title">{character.name}</h1>
      <img
        className="character-image"
        src={character.image}
        alt={character.name}
        width="300"
        height="300"
      />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      {character.type && <p>Type: {character.type}</p>}
      <p>Gender: {character.gender}</p>
    </div>
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
    <div className="content-wrapper">
      <ErrorBoundary>
        <CharacterCard character={item} />
      </ErrorBoundary>
    </div>
  )
}

export default CharacterDetail
