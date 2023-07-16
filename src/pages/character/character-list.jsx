import { Link, useSearchParams } from "react-router-dom"
import { Sort } from "../../components/sort"
import characters from "../../data/characters.json"
import { sortByDate } from "../../helpers/sort-by-date"

export function CharacterList() {
  const [searchParams, setSearchParams] = useSearchParams({ sort: "ASC" })
  const sortingType = searchParams.get("sort")
  const sortedCharacters = sortByDate(characters, sortingType)

  return (
    <div className="content-wrapper">
      <h1 className="title">Characters</h1>
      <Sort
        value={sortingType}
        onChange={(e) => setSearchParams({ sort: e.target.value })}
      />
      <ul className="list">
        {sortedCharacters.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/characters/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
