import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    return (
        <button
            className="w-8 h-8 rounded-full bg-bg-fg dark:bg-bg-bg flex items-center justify-center hover:ring-2 ring-bg-bg dark:ring-bg-fg transition-all duration-300 focus:outline-none"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle Dark Mode"
        >
            {theme === 'light' ? (
                <FaMoon className="text-bg-bg w-5 h-5" />
            ) : (
                <FaSun className="text-bg-fg w-5 h-5" />
            )}
        </button>
    )
}

export default ThemeToggler
