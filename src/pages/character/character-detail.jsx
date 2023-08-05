import { useParams } from "react-router-dom"
import characters from "../../data/characters.json"

function CharacterDetail() {
  const { id } = useParams()
  const character = characters.find((item) => item.id.toString() === id)
  
  return (
    <div className="content-wrapper">
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

export default CharacterDetail
