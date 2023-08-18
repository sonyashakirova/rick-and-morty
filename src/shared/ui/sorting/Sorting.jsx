import { Box } from "@mantine/core"
import "./Sorting.css"

export function Sorting({ value, onChange }) {
  return (
    <fieldset className="sorting">
      <span>Sort</span>
      <div>
        <input
          id="sort-asc"
          className="arrow-up"
          type="radio"
          name="sort"
          value="ASC"
          checked={value === "ASC"}
          onChange={onChange}
        />
        <label htmlFor="sort-asc" className="visually-hidden">Ascending</label>
      </div>
      <div>
        <input
          id="sort-desc"
          className="arrow-down"
          type="radio"
          name="sort"
          value="DESC"
          checked={value === "DESC"}
          onChange={onChange}
        />
        <label htmlFor="sort-desc" className="visually-hidden">Descending</label>
      </div>
    </fieldset>
  )
}
