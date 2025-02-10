import './Register.css'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { registerUser } from '../logic/registerUser'

import { Link } from 'react-router-dom'
function Register() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const initialValues = {
    email: '',
    password: '',
    username: '',
    couple: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Nombre es obligatorio'),
    email: Yup.string()
      .email('Email Inválido')
      .required('Email es obligatorio'),
    couple: Yup.string()
      .email('Email de pareja inválido')
      .required('Email de pareja es obligatorio'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener mínimo 6 caracteres')
      .required('Password es obligatoria'),
  })

  const handleOnSubmit = async (values, { setSubmitting }) => {
    setLoading(true)
    setError('')

    console.log(values)

    try {
      const user = await registerUser(
        values.email,
        values.password,
        values.username,
        values.couple
      )

      sessionStorage.setItem('userName', values.username)
      sessionStorage.setItem('email', values.email)

      //   const usuarios = await getUsuarios()
      //   const foundUser = usuarios.find((usuario) => usuario.id === user.uid)

      //   if (!foundUser) {
      //     setRole(foundUser.role)
      //     setUserName(foundUser.name)
      //     sessionStorage.setItem('userName', foundUser.name)
      //     sessionStorage.setItem('email', user.email)
      //   } else {
      //     setError('Usuario ya registrado.')
      //   }

      console.log('User registered:', user)
    } catch (error) {
      setError('Error al registrar el usuario.')
      console.error('Error al registrar el usuario:', error)
    } finally {
      setLoading(false)
      setSubmitting(false)
    }
  }

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
              <label htmlFor="username">Nombre de usuario</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="couple">Email de tu pareja</label>
              <Field type="email" id="couple" name="couple" />
              <ErrorMessage name="couple" component="div" className="error" />
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
              {isSubmitting ? 'Cargando...' : 'Registrar'}
            </button>
            <Link to="/">
              <p>Ya tengo cuenta, Iniciar sesión</p>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register
