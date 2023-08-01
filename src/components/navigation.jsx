import { Link, NavLink } from "react-router-dom"

export function Navigation() {
  return (
    <nav className="navbar">
      <ul className="list">
        <li>
          <Link to="/">
            <img className="logo" src="../images/logo.png" alt="Home" />
          </Link>
        </li>
        <li><NavLink to="/characters">Characters</NavLink></li>
        <li><NavLink to="/episodes">Episodes</NavLink></li>
        <li><NavLink to="/locations">Locations</NavLink></li>
      </ul>
    </nav>
  )
}
