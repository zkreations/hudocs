const storedTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const theme = (!storedTheme || storedTheme === 'system')
  ? (prefersDark ? 'dark' : 'light')
  : storedTheme

document.documentElement.classList.add(theme)
