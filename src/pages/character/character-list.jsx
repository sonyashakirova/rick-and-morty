import { useSearchParams } from "react-router-dom"
import { List, Sort } from "../../components"
import characters from "../../data/characters.json"
import { sortByDate } from "../../helpers/sort-by-date"

function CharacterList() {
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
      <List category="characters" items={sortedCharacters} />
    </div>
  )
}

export default CharacterList
