import { useUser } from '../providers/UserContext'
import { Navigate } from 'react-router-dom'

function RequireAuth({ children }) {
  const { user } = useUser()

  if (!user) {
    // Si no hay usuario, redirige a la página de inicio de sesión
    return <Navigate to="/" />
  }

  // Si el usuario está autenticado y tiene el rol adecuado, renderiza los hijos
  return children
}

export default RequireAuth
