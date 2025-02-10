import { useState } from 'react'

// Custom hook para manejar formularios
function useForm(initialState, onSubmit, validate) {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      try {
        await onSubmit(values)
      } catch (error) {
        setErrors({ submit: error.message })
      }
    }
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  }
}

export default useForm
