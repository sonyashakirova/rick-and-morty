import { Box, NavLink } from "@mantine/core"
import { Link } from "react-router-dom"
import "./Navigation.css"

export function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <NavLink component={Link} label="Characters" to="/characters" />
      </li>
      <li>
        <NavLink component={Link} label="Episodes" to="/episodes" />
      </li>
      <li>
        <NavLink component={Link} label="Locations" to="/locations" />
      </li>
    </ul>
  )
}
