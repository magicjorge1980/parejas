export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    console.log('Response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error response:', errorText)
      throw new Error(`Error al iniciar sesión: ${errorText}`)
    }

    const data = await response.json()
    console.log('Response data:', data)
    return data
  } catch (error) {
    console.error('Error logging user:', error)
    throw error
  }
}
