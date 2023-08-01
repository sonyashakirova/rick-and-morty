import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem("user") ?? null)

  function login(newUser, callback) {
    setUser(newUser)
    localStorage.setItem("user", newUser)
    callback()
  }

  function logout(callback) {
    setUser(null)
    localStorage.removeItem("user")
    callback()
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}
