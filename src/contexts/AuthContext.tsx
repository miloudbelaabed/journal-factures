import { Modal, Spin } from "antd"
import { createContext, useContext, useState, useEffect, useMemo } from "react"
import { LoadingOutlined } from "@ant-design/icons"

import { AuthLogin } from "../services/authSerivce"

interface AuthState {
  isAuthenticated: boolean

  loginFailure: string[]
}

const initialState: AuthState = {
  isAuthenticated: false,

  loginFailure: [],
}

interface AuthContextProps extends AuthState {
  login: (credintials: any) => boolean
  logout: () => void
  loading: boolean
}
const AuthContext = createContext<AuthContextProps>({
  login: (cridentials: any) => false,
  logout: () => {},
  loading: false,
  ...initialState,
})

function AuthProvider({ children }: any) {
  // change this also
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>({
    advancedUser: false,
    roles: [],
    userName: "",
    wilayas: [],
  })
  const [isAppLoading, setIsAppLoading] = useState(true)

  const login = (credentials: any) => {
    setLoading(true)
    const result = AuthLogin(credentials)
    setLoading(false)
    if (result) {
      Modal.success({
        title: "Connextion succès",
        content: "Bienvenue dans journal des factures Cosider",
      })
      setIsAuthenticated(true)
      return true
    }
    setIsAuthenticated(false)

    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
  }
  useEffect(() => {
    setIsAppLoading(false)
  }, [])
  const AuthentificationContext = useMemo(
    () => ({
      login,
      logout,
      ...initialState,
      loading,
      isAuthenticated,

      user,
    }),
    [isAuthenticated, loading, user]
  )
  function AppSpin() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin indicator={<LoadingOutlined style={{ fontSize: 77 }} />} />
      </div>
    )
  }
  return (
    <AuthContext.Provider value={AuthentificationContext}>
      {isAppLoading ? <AppSpin /> : children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
