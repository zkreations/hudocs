let storedTheme = null
try {
  storedTheme = localStorage.getItem('theme')
} catch {}
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const theme = (!storedTheme || storedTheme === 'system')
  ? (prefersDark ? 'dark' : 'light')
  : storedTheme

document.documentElement.classList.add(theme)
