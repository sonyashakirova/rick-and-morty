import { Link } from "react-router-dom"
import characters from "../../data/characters.json"

export function CharacterList() {
  return (
    <div className="content-wrapper">
      <h1 className="title">Characters</h1>
      <ul className="list">
        {characters.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/characters/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
