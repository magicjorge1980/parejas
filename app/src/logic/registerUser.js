export const registerUser = async (username, email, password, couple) => {
  try {
    const response = await fetch('http://localhost:8080/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        couple,
      }),
    })

    console.log('Response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error response:', errorText)
      throw new Error(`Error al registrar el usuario: ${errorText}`)
    }

    const data = await response.json()
    console.log('Response data:', data)
    return data
  } catch (error) {
    console.error('Error registering user:', error)
    throw error
  }
}
