
'use client'
import { ReactNode } from "react";
import { useState , createContext , useContext } from "react";

type AuthContextType = {
  email: string
  setEmail: (email: string) => void
}

const AuthContext = createContext<AuthContextType>({
  email: '',
  setEmail: () => {}
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState('')

  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
