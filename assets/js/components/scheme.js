const STORAGE_KEY = 'theme'
const ACTIVE_CLASS = 'is-active'
const NO_TRANSITIONS = 'no-transitions'

const themeContainer = document.querySelector('.theme-handle')
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const metaColorScheme = document.querySelector('meta[name="color-scheme"]')

function getMode (pref) {
  if (pref === 'light' || pref === 'dark') return pref
  return mediaQuery.matches ? 'dark' : 'light'
}

function applyTheme (pref) {
  const mode = getMode(pref)

  document.body.classList.add(NO_TRANSITIONS)
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(mode)
  if (metaColorScheme) metaColorScheme.content = mode

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove(NO_TRANSITIONS)
    })
  })

  if (themeContainer) {
    themeContainer.querySelectorAll('[data-theme]').forEach((btn) => {
      btn.classList.toggle(ACTIVE_CLASS, btn.dataset.theme === pref)
    })
  }
}

function initTheme () {
  let preference = localStorage.getItem(STORAGE_KEY) || 'system'

  applyTheme(preference)

  if (themeContainer) {
    themeContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-theme]')
      if (!btn) return
      preference = btn.dataset.theme
      localStorage.setItem(STORAGE_KEY, preference)
      applyTheme(preference)
    })
  }

  mediaQuery.addEventListener('change', () => {
    if (preference === 'system') {
      applyTheme('system')
    }
  })
}

initTheme()