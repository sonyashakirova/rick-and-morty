import { Link, NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth-provider"

export function UserBlock() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleClick() {
    logout(() => navigate("/"))
  }

  return (
    <div className="user-block">
      {user === null
        ? <NavLink className="button-ghost" to="/login">
            Login
          </NavLink>
        : <div>
            <p>Hello, {user}!</p>
            <button className="button-ghost" type="button" onClick={handleClick}>
              Logout
            </button>
          </div>
      }
    </div>
  )
}
