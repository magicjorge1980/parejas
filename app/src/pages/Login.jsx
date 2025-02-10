import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { loginUser } from '../logic/loginUser'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { useUser } from '../providers/UserContext'

function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { setUser, setRole, setUserName } = useUser()

  const navigate = useNavigate()

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email Inválido')
      .required('Email es obligatorio'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener mínimo 6 caracteres')
      .required('Password es obligatoria'),
  })

  const handleOnSubmit = async (values, { setSubmitting }) => {
    setLoading(true)
    setError('')

    try {
      const foundUser = await loginUser(values.email, values.password)

      console.log('User logged in:', foundUser)

      setUser(foundUser)

      if (foundUser) {
        sessionStorage.setItem('token', foundUser.token)
        sessionStorage.setItem('username', foundUser.username)

        navigate('/home')
      } else {
        setError('Usuario no encontrado.')
      }
    } catch (error) {
      setError('Error de credenciales.')
      console.error('Error de credenciales:', error)
    } finally {
      setLoading(false)
      setSubmitting(false)
    }
  }

  //   const handleClick = async () => {
  //     await addNewCard()
  //   }

  // const handleClick = async () => {
  //   await resetUsadas()
  // }

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="form-group">
              <h1>Couples</h1>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            {error && <p className="error">{error}</p>}
            <button
              className="submit-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Cargando...' : 'Login'}
            </button>
            <Link to="/register">
              <p>No tienes cuenta? Regístrate</p>
            </Link>
          </Form>
        )}
      </Formik>
      {/* <button onClick={handleClick}>añadir cartas</button> */}
    </div>
  )
}

export default LoginForm
