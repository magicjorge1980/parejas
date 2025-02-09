import { useState } from 'react'
import { registerUser } from '../logic/registerUser'
export default function Register() {
  const [data, setData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    couple: '',
  })

  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      await registerUser(
        data.name,
        data.username,
        data.email,
        data.password,
        data.couple
      )
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={data.password}
          onChange={handleChange}
        />
        <input
          type="couple"
          name="couple"
          placeholder="Pareja"
          value={data.couple}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}
