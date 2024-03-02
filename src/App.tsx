import { RouterProvider } from "react-router-dom"
import router from "./routes"
import AuthProvider from "./contexts/AuthContext"
import HeaderProvide from "./contexts/AppContext"

function App() {
  return (
    <AuthProvider>
      <HeaderProvide>
        <RouterProvider router={router} />
      </HeaderProvide>
    </AuthProvider>
  )
}

export default App
