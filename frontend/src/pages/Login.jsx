import { useState } from 'react'
import { Theater, Eye, EyeOff } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'
import ThemeToggle from '../components/ThemeToggle'

const DEMO_USER = { email: 'demo@example.com', password: 'password123' }

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      onLogin({ email })
    } else {
      setError('Invalid credentials. Use demo@example.com / password123')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center px-6 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-600/30">
            <Theater className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Broadway Shows</h1>
          <p className="text-gray-400 text-sm mt-1">NYC's Best, In Your Pocket</p>
        </div>

        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-lg">Welcome back</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 text-base">Email</Label>
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  tabIndex={1}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="demo@example.com"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-blue-500 text-lg h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300 text-base">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    tabIndex={2}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password123"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-blue-500 text-lg h-12 pr-11"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 active:text-white p-1"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="rounded-md bg-red-500/10 border border-red-500/20 px-3 py-2">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <Button type="submit" tabIndex={3} className="w-full h-12 text-base">
                Sign In
              </Button>

              <button
                type="button"
                onClick={() => { setEmail(DEMO_USER.email); setPassword(DEMO_USER.password) }}
                className="w-full text-xs text-gray-400 hover:text-gray-300 active:text-gray-200 text-center pt-1 underline underline-offset-2"
              >
                Tap to fill demo credentials
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
