import { Link } from "react-router-dom"
import locations from "../../data/location.json"

export function LocationList() {
  return (
    <div className="content-wrapper">
      <h1 className="title">Locations</h1>
      <ul className="list">
        {locations.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/locations/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
