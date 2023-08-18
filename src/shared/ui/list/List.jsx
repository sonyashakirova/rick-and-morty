import { List as MantineList } from "@mantine/core"
import { Link } from "react-router-dom"
import "./List.css"

export function List({
  category,
  error,
  items,
  lastNodeRef,
  loading,
}) {
  return (
    <MantineList listStyleType="none">
      {items.map(({ id, name }, index) => {
        const ref = items.length - 10 === index + 1 ? lastNodeRef : null

        return (
          <MantineList.Item ref={ref} key={id} pb={4}>
            <Link to={`/${category}/${id}`} className="list-item-link">{name}</Link>
          </MantineList.Item>
        )
      })}
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong!</p>}
    </MantineList>
  )
}
