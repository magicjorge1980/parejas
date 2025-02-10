import { registerUser } from '../logic/registerUser'
import useForm from '../hooks/useForm'

export default function Register() {
  const validate = (values) => {
    const errors = {}
    if (!values.name) errors.name = 'Nombre es requerido'
    if (!values.username) errors.username = 'Nombre de usuario es requerido'
    if (!values.email) errors.email = 'Correo electrónico es requerido'
    if (!values.password) errors.password = 'Contraseña es requerida'
    // Agrega más validaciones según sea necesario
    return errors
  }

  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      name: '',
      username: '',
      email: '',
      password: '',
      couple: '',
    },
    async (formValues) => {
      await registerUser(
        formValues.name,
        formValues.username,
        formValues.email,
        formValues.password,
        formValues.couple
      )
      // Puedes agregar lógica adicional aquí, como redirigir al usuario o mostrar un mensaje de éxito
    },
    validate
  )

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        <input
          type="text"
          name="couple"
          placeholder="Pareja"
          value={values.couple}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {errors.submit && <p style={{ color: 'red' }}>{errors.submit}</p>}
    </>
  )
}
