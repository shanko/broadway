import { useState } from 'react'
import { ThemeProvider } from './lib/useTheme.jsx'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <ThemeProvider>
      {user
        ? <Dashboard user={user} onLogout={() => setUser(null)} />
        : <Login onLogin={setUser} />
      }
    </ThemeProvider>
  )
}
