import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

// function PrivateRoute() {
//   const { isAuthenticated } = useAuth()
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
// }

function AuthRoute() {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />
}

export { AuthRoute }
