import { Modal, Spin } from "antd"
import { createContext, useContext, useState, useEffect, useMemo } from "react"
import { LoadingOutlined } from "@ant-design/icons"

import { AuthLogin } from "../services/authSerivce"

interface AuthState {
  isAuthenticated: boolean
  isAdvancedUser: boolean
  user: any
  loginFailure: string[]
}

const initialState: AuthState = {
  isAuthenticated: true,
  isAdvancedUser: false,
  user: {
    roles: [],
    wilayas: [],
    userName: "",
    advancedUser: false,
  },
  loginFailure: [],
}

interface AuthContextProps extends AuthState {
  login: (credintials: any) => Promise<boolean>
  logout: () => void
  loading: boolean
}
const AuthContext = createContext<AuthContextProps>({
  login: () =>
    new Promise((resolve, _) => {
      resolve(false)
    }),
  logout: () => {},
  loading: true,
  ...initialState,
})

function AuthProvider({ children }: any) {
  // change this also
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>({
    advancedUser: false,
    roles: [],
    userName: "",
    wilayas: [],
  })
  const [isAppLoading, setIsAppLoading] = useState(true)

  const login = async (credentials: any) => {
    setLoading(true)
    console.log(credentials)
    return AuthLogin(credentials)
      .then((res) => {
        Modal.success({
          title: "Connextion succès",
          content: "Bienvenue dans journal des factures Cosider",
        })
        setIsAuthenticated(true)
        return true
      })
      .catch((error: any) => {
        console.log(error)
        Modal.error({
          title: "Un problème est survenu lors de la connexion",
          content: error?.response?.data,
        })

        // setIsAuthenticated(false)
        setIsAuthenticated(true)

        return true
        // return false
      })
      .finally(() => setLoading(false))
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

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
