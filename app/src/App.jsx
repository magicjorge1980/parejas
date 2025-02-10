import { useEffect, useState } from 'react'
import { useUser } from './providers/UserContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  const { setUser } = useUser()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const token = sessionStorage.getItem('token')
      if (token) {
        try {
          const response = await fetch(
            'http://localhost:8080/api/users/verify-token',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ token }),
            }
          )

          const data = await response.json()
          if (data.isValid) {
            setUser(data.user) // Establece el usuario en el contexto
          }
        } catch (error) {
          console.error('Error verificando el token:', error)
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }

    checkAuth()
  }, [setUser])

  if (loading) {
    return <div className="loading">Cargando...</div>
  }

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
