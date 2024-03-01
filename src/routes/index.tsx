import React from "react"
import { createBrowserRouter } from "react-router-dom"

import { LoginPage, UsersPage } from "../pages"

import StatusPage from "../pages/StatusPage"
import { AuthRoute } from "./RouteTypes"
import PrivateRoute from "./PrivateRoute"

const PrivateLayout = React.lazy(() => import("../layout/PrivateLayout"))
const PublicLayout = React.lazy(() => import("../layout/PublicLayout"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,

    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <UsersPage />
          </PrivateRoute>
        ),
      },

      {
        path: "*",
        element: <StatusPage type="errorCode" statusCode="404" />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthRoute />,
    children: [
      {
        path: "/login",
        element: (
          <PublicLayout>
            <LoginPage />
          </PublicLayout>
        ),
      },
    ],
  },
])

export default router
