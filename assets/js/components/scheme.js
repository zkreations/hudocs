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

function syncUI (pref) {
  if (themeContainer) {
    themeContainer.querySelectorAll('[data-theme]').forEach((btn) => {
      const isSelected = btn.dataset.theme === pref
      btn.classList.toggle(ACTIVE_CLASS, isSelected)
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false')
    })
  }
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

  syncUI(pref)
}

function getStorageItem (key, fallback) {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

function setStorageItem (key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {}
}

function initTheme () {
  let preference = getStorageItem(STORAGE_KEY, 'system')

  const mode = getMode(preference)
  if (!document.documentElement.classList.contains(mode)) {
    applyTheme(preference)
  } else {
    if (metaColorScheme) metaColorScheme.content = mode
    syncUI(preference)
  }

  if (themeContainer) {
    themeContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-theme]')
      if (!btn) return
      preference = btn.dataset.theme
      setStorageItem(STORAGE_KEY, preference)
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