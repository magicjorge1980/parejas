import { Routes, Route, Navigate } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import RequireAuth from './RequireAuth'

import { useUser } from '../providers/UserContext'

const AppRoutes = () => {
  const { user } = useUser()
  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />

      <Route
        path="/register"
        element={user ? <Navigate to="/home" /> : <Register />}
      />
      <Route
        path="/home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      {/* Puedes agregar más rutas aquí */}
    </Routes>
  )
}

export default AppRoutes
