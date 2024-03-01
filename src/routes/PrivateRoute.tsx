import { Navigate, useLocation } from "react-router-dom"
import jwtDecode from "jwt-decode"
import { useAuth } from "../contexts/AuthContext"
import StatusPage from "../pages/StatusPage"

interface PrivateRouteProps {
  children: JSX.Element
}
export default function PrivateRoute({ children }: PrivateRouteProps) {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}
