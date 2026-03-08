import { useState } from 'react'
import { Theater } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'
import ThemeToggle from '../components/ThemeToggle'

const DEMO_USER = { email: 'demo@example.com', password: 'password123' }

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    <div className="min-h-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center px-6 relative">
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
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Tab' && !email) { e.preventDefault(); setEmail(DEMO_USER.email) } }}
                  placeholder="demo@example.com"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Tab' && !password) { e.preventDefault(); setPassword(DEMO_USER.password) } }}
                  placeholder="password123"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-blue-500"
                />
              </div>

              {error && (
                <div className="rounded-md bg-red-500/10 border border-red-500/20 px-3 py-2">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <Button type="submit" className="w-full h-11 text-base">
                Sign In
              </Button>

              <p className="text-xs text-gray-500 text-center pt-1">
                Demo: demo@example.com / password123
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
