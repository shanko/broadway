import { Sun, Moon, Monitor } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from '../lib/useTheme.jsx'

const icons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
}

export default function ThemeToggle() {
  const { mode, cycle } = useTheme()
  const Icon = icons[mode]

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycle}
      className="h-9 w-9 text-gray-500 dark:text-gray-400"
      title={`Theme: ${mode}`}
    >
      <Icon className="h-4 w-4" />
    </Button>
  )
}
