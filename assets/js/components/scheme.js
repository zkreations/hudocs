const THEME_HANDLE = document.querySelectorAll('.theme-handle > *')
const ACTIVE_CLASS = 'is-active'
const NO_TRANSITIONS_CLASS = 'no-transitions'
const LIGHT_MODE = 'light'
const DARK_MODE = 'dark'
const SYSTEM_MODE = 'system'

let userPreference = null
let systemColorSchemeMediaQuery = null

// Saves the user preference in localStorage.
// @param {string} pref - The user preference.
// @returns {void}
function saveUserPreference (pref) {
  localStorage.setItem('theme', pref)
}

// Determines the applied mode.
// @param {string} pref - The user preference.
// @returns {string} The applied theme mode.
function getAppliedMode (pref) {
  if (pref === LIGHT_MODE) return LIGHT_MODE
  if (pref === DARK_MODE) return DARK_MODE

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? LIGHT_MODE
    : DARK_MODE
}

// Sets the applied mode by updating the document's class and meta tag.
// @param {string} mode - The theme mode to apply.
// @returns {void}
function setAppliedMode (mode) {
  document.documentElement.className = mode
  document.querySelector('meta[name="color-scheme"]').content = mode
}

// Changes the theme while temporarily disabling transitions.
// @param {string} mode - The theme mode to apply.
// @returns {void}
function changeTheme (mode) {
  document.body.classList.add(NO_TRANSITIONS_CLASS)
  setAppliedMode(mode)

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove(NO_TRANSITIONS_CLASS)
    })
  })
}

// Handles the click event on theme toggle buttons.
// Updates the user preference and applies the new theme.
// @param {HTMLElement} handle - The clicked theme toggle button.
// @returns {void}
function handleThemeToggleClick (handle) {
  const newUserPref = handle.dataset.theme
  const newMode = getAppliedMode(newUserPref)

  userPreference = newUserPref
  saveUserPreference(newUserPref)
  changeTheme(newMode)

  THEME_HANDLE.forEach(el => {
    el.classList.toggle(ACTIVE_CLASS, el.dataset.theme === userPreference)
  })
}

// Handles the system color scheme change event.
// @param {MediaQueryListEvent} event - The color scheme change event.
// @returns {void}
function handleSystemColorSchemeChange (event) {
  if (userPreference === SYSTEM_MODE) {
    changeTheme(event.matches ? DARK_MODE : LIGHT_MODE)
  }
}

// Checks if the theme can be initialized.
// @returns {boolean} Whether the theme can be initialized.
function canInitTheme () {
  return (
    THEME_HANDLE.length > 0 &&
    'matchMedia' in window &&
    typeof window.matchMedia === 'function'
  )
}

// Initializes the theme functionality.
// @returns {void}
function initTheme () {
  if (!canInitTheme()) return

  userPreference = localStorage.getItem('theme') || SYSTEM_MODE

  systemColorSchemeMediaQuery = window.matchMedia(
    '(prefers-color-scheme: dark)'
  )

  systemColorSchemeMediaQuery.addEventListener(
    'change',
    handleSystemColorSchemeChange
  )

  setAppliedMode(getAppliedMode(userPreference))

  THEME_HANDLE.forEach(handle => {
    handle.addEventListener('click', () => {
      handleThemeToggleClick(handle)
    })

    handle.classList.toggle(
      ACTIVE_CLASS,
      handle.dataset.theme === userPreference
    )
  })
}

initTheme()