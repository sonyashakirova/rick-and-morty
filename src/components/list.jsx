import { Link } from "react-router-dom";

export function List({ items, category }) {
  return (
    <ul className="list">
      {items.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/${category}/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}
