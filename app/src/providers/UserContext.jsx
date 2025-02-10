import { createContext, useState, useContext } from 'react'

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const [userName, setUserName] = useState(null)

  return (
    <UserContext.Provider
      value={{ user, setUser, role, setRole, userName, setUserName }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
