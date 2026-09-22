function isEditing (el) {
  if (!el) return false
  const tag = el.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable
}

function initSearchLoader () {
  const configEl = document.getElementById('search-config')
  const searchBox = document.getElementById('search-box')
  if (!configEl || !searchBox) return

  let config
  try {
    config = JSON.parse(configEl.textContent)
  } catch {
    return
  }

  const { flexsearchUrl, searchUrl } = config || {}
  if (!searchUrl) return

  let isLoading = false
  let isLoaded = false

  function loadScript (src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  async function loadSearch () {
    if (isLoaded || isLoading) return
    isLoading = true

    try {
      if (flexsearchUrl && !window.FlexSearch) {
        await loadScript(flexsearchUrl)
      }
      await loadScript(searchUrl)
      isLoaded = true
    } catch (err) {
      isLoading = false
      console.error('Search load error:', err)
    }
  }

  function openSearch () {
    loadSearch()
    const searchToggle = document.querySelector('.search-toggle')
    if (searchToggle) {
      searchToggle.click()
    }
  }

  const searchToggle = document.querySelector('.search-toggle')
  if (searchToggle) {
    searchToggle.addEventListener('pointerenter', loadSearch, { once: true })
    searchToggle.addEventListener('focus', loadSearch, { once: true })
    searchToggle.addEventListener('click', loadSearch, { once: true })
  }

  searchBox.addEventListener('focusin', loadSearch, { once: true })

  document.addEventListener('keydown', (e) => {
    if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      openSearch()
      return
    }

    if (e.key === '/' && !isEditing(e.target)) {
      e.preventDefault()
      openSearch()
    }
  })
}

initSearchLoader()

