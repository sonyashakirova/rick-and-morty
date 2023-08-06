import { Link } from "react-router-dom";

export function List({
  category,
  error,
  items,
  lastNodeRef,
  loading,
}) {
  return (
    <ul className="list">
      {items.map(({ id, name }, index) => {
        const ref = items.length - 10 === index + 1 ? lastNodeRef : null

        return (
          <li ref={ref} key={id}>
            <Link to={`/${category}/${id}`}>{name}</Link>
          </li>
        )
      })}
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong!</p>}
    </ul>
  )
}
