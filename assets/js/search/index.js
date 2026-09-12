import { buildSearchRegex, normalizeText } from './text'
import { createIndexLoader } from './index-loader'
import { clearResults, groupResultsByParent, renderResults, showEmptyState, showErrorState } from './results'
import { createCombobox } from './combobox'

(() => {
  const input = document.getElementById('search-input')
  const results = document.getElementById('search-results')
  const configEl = document.getElementById('search-config')

  if (!input || !results || !configEl) return

  const { indexUrl, i18n } = JSON.parse(configEl.textContent)
  if (!indexUrl) return

  const loader = createIndexLoader()
  const combobox = createCombobox(input)
  const parentCache = new Map()
  const queryCache = new Map()
  const MAX_CACHE_SIZE = 50
  let debounceTimer = null

  function setCache (key, value) {
    if (queryCache.size >= MAX_CACHE_SIZE) {
      const oldestKey = queryCache.keys().next().value
      queryCache.delete(oldestKey)
    }
    queryCache.set(key, value)
  }

  function onLoadingChange (isLoading) {
    if (isLoading) {
      input.setAttribute('aria-busy', 'true')
      input.classList.add('is-loading')
    } else {
      input.removeAttribute('aria-busy')
      input.classList.remove('is-loading')
    }
  }

  async function initSearch () {
    if (loader.isReady() || loader.isLoading()) return

    try {
      await loader.loadIndex(indexUrl, onLoadingChange)
      if (input.value.trim()) {
        search()
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Search init error:', error)
        combobox.reset()
        showErrorState(results, i18n.searchError)
      }
    }
  }

  async function search () {
    const query = input.value.trim()
    if (!query) {
      clearResults(results)
      combobox.reset()
      return
    }

    if (!loader.isReady()) return

    const normalizedQuery = normalizeText(query)
    const cacheKey = normalizedQuery.toLowerCase()

    if (queryCache.has(cacheKey)) {
      const cached = queryCache.get(cacheKey)
      queryCache.delete(cacheKey)
      queryCache.set(cacheKey, cached)

      if (cached.hits.length === 0) {
        combobox.reset()
        showEmptyState(results, i18n.noResults)
        return
      }

      const items = renderResults(results, cached.grouped, cached.regex)
      combobox.setItems(items)
      return
    }

    try {
      const hits = await loader.search(query, 100)

      if (hits.length === 0) {
        setCache(cacheKey, { hits: [], grouped: null, regex: null })
        combobox.reset()
        showEmptyState(results, i18n.noResults)
        return
      }

      const regex = buildSearchRegex(query)
      const grouped = groupResultsByParent(hits, loader.getPage, parentCache)
      setCache(cacheKey, { hits, grouped, regex })

      const items = renderResults(results, grouped, regex)
      combobox.setItems(items)
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Search error:', error)
        combobox.reset()
        showErrorState(results, i18n.searchError)
      }
    }
  }

  input.addEventListener('focus', initSearch, { once: true })
  input.addEventListener('keydown', combobox.handleKeydown)

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      if (!loader.isReady()) {
        initSearch()
      } else {
        search()
      }
    }, 200)
  })
})()

