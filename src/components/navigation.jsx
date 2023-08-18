import { Link, NavLink } from "react-router-dom"
import { Logo } from "shared/ui"

export function Navigation() {
  return (
    <nav className="navbar">
      <ul className="list">
        <li>
          <Logo />
        </li>
        <li><NavLink to="/characters">Characters</NavLink></li>
        <li><NavLink to="/episodes">Episodes</NavLink></li>
        <li><NavLink to="/locations">Locations</NavLink></li>
      </ul>
    </nav>
  )
}
