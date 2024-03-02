import { Navigate, useLocation } from "react-router-dom"

import { useAuth } from "../contexts/AuthContext"

interface PrivateRouteProps {
  children: JSX.Element
}
export default function PrivateRoute({ children }: PrivateRouteProps) {
  const location = useLocation()
  const { isAuthenticated } = useAuth()
  console.log(isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}
