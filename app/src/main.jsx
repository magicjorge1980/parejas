import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './providers/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <UserProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </UserProvider>
  </Router>
)
