import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/auth-provider"

export function PrivateRoute() {
  const { user } = useAuth()
  const location = useLocation()

  if (user === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return <Outlet />
}
