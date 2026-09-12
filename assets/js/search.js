/*
{{- $indexes := dict -}}
{{- range .Site.Sections -}}
  {{- $file := printf "json/%s.%s.index.json" $.Language.Lang .Section -}}
  {{- $data := resources.Get "json/index.json" | resources.ExecuteAsTemplate $file . | resources.Minify | resources.Fingerprint -}}
  {{- $indexes = merge $indexes (dict .Section $data.RelPermalink) -}}
{{- end -}}
*/

(() => {
  const searchIndexes = {{ $indexes | jsonify }}
  const input = document.getElementById('search-input')
  const results = document.getElementById('search-results')
  const currentVersionEl = document.getElementById('current-version')

  if (!input || !results) return

  const MAX_CACHE_SIZE = 50

  function normalizeText (str) {
    if (!str) return ''
    return str
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
  }

  const state = {
    index: new FlexSearch.Index({
      tokenize: 'forward',
      cache: true
    }),
    docMap: new Map(),
    parentCache: new Map(),
    queryCache: new Map(),
    isReady: false,
    isLoading: false,
    debounceTimer: null,
    abortController: null,
    activeIndex: -1,
    resultItems: []
  }

  function setCache (key, value) {
    if (state.queryCache.size >= MAX_CACHE_SIZE) {
      const oldestKey = state.queryCache.keys().next().value
      state.queryCache.delete(oldestKey)
    }
    state.queryCache.set(key, value)
  }

  function getCurrentVersion () {
    if (currentVersionEl) {
      return currentVersionEl.innerText.trim()
    }
    const parts = window.location.pathname.split('/').filter(Boolean)
    if (parts.length > 0) {
      return parts[0] === '{{ .Language.Lang }}' ? parts[1] : parts[0]
    }
    return null
  }

  function showEmptyState () {
    results.replaceChildren()
    state.resultItems = []
    state.activeIndex = -1
    input.removeAttribute('aria-activedescendant')
    input.setAttribute('aria-expanded', 'false')
    const el = document.createElement('p')
    el.className = 'search-empty fs-7'
    el.textContent = '{{ i18n "no_results" }}'
    results.appendChild(el)
  }

  function showErrorState (message) {
    results.replaceChildren()
    state.resultItems = []
    state.activeIndex = -1
    input.removeAttribute('aria-activedescendant')
    input.setAttribute('aria-expanded', 'false')
    const el = document.createElement('p')
    el.className = 'search-error fs-7'
    el.setAttribute('role', 'alert')
    el.textContent = message || '{{ i18n "search_error" }}'
    results.appendChild(el)
  }

  async function initSearch () {
    if (state.isReady || state.isLoading) return

    const version = getCurrentVersion()
    const dataURL = searchIndexes[version]
    if (!dataURL) {
      showErrorState()
      return
    }

    if (state.abortController) {
      state.abortController.abort()
    }
    state.abortController = new AbortController()

    state.isLoading = true
    input.setAttribute('aria-busy', 'true')
    input.classList.add('is-loading')

    try {
      const response = await fetch(dataURL, {
        signal: state.abortController.signal
      })

      if (!response.ok) {
        throw new Error(`Failed to load search data: ${response.status}`)
      }

      const rows = await response.json()
      state.docMap = new Map()
      state.queryCache.clear()

      rows.forEach(([id, url, title, parent, summary, content]) => {
        state.docMap.set(id, { url, title, parent, summary, content })
        state.index.add(id, normalizeText(`${title} ${content}`))
      })

      state.isReady = true
      input.removeEventListener('focus', initSearch)
      if (input.value.trim()) {
        search().catch(console.error)
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Search init error:', error)
        showErrorState()
      }
    } finally {
      state.isLoading = false
      input.removeAttribute('aria-busy')
      input.classList.remove('is-loading')
    }
  }

  function buildSearchRegex (query) {
    const terms = query.trim().split(/\s+/).filter(Boolean)
    if (!terms.length) return null

    const patterns = terms.map(term => {
      const normalized = normalizeText(term)
      return Array.from(normalized).map(char => {
        const escaped = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        return `${escaped}\\p{Diacritic}*`
      }).join('')
    })

    return new RegExp(`(${patterns.join('|')})`, 'giu')
  }

  function extractSnippet (page, regex) {
    if (!regex || !page.content) return page.summary

    const testRegex = new RegExp(regex.source, 'iu')
    if (testRegex.test(page.title.normalize('NFD')) || (page.summary && testRegex.test(page.summary.normalize('NFD')))) {
      return page.summary
    }

    const content = page.content.normalize('NFD')
    const match = testRegex.exec(content)
    if (!match) return page.summary

    const padBefore = 45
    const padAfter = 65
    let start = Math.max(0, match.index - padBefore)
    let end = Math.min(content.length, match.index + match[0].length + padAfter)

    if (start > 0) {
      const spaceIndex = content.indexOf(' ', start)
      if (spaceIndex !== -1 && spaceIndex < match.index) {
        start = spaceIndex + 1
      }
    }

    if (end < content.length) {
      const spaceIndex = content.lastIndexOf(' ', end)
      if (spaceIndex !== -1 && spaceIndex > match.index + match[0].length) {
        end = spaceIndex
      }
    }

    let snippet = content.slice(start, end).trim().normalize('NFC')
    if (start > 0) snippet = `… ${snippet}`
    if (end < content.length) snippet = `${snippet} …`

    return snippet
  }

  function renderHighlighted (container, text, regex) {
    container.textContent = ''
    if (!text) return
    if (!regex) {
      container.textContent = text
      return
    }

    const normalizedText = text.normalize('NFD')
    regex.lastIndex = 0
    let lastIndex = 0
    let match

    while ((match = regex.exec(normalizedText)) !== null) {
      if (match.index > lastIndex) {
        container.appendChild(document.createTextNode(normalizedText.slice(lastIndex, match.index).normalize('NFC')))
      }
      if (match[0].length === 0) {
        regex.lastIndex++
        continue
      }
      const mark = document.createElement('mark')
      mark.textContent = match[0].normalize('NFC')
      container.appendChild(mark)
      lastIndex = regex.lastIndex
      if (!regex.global) break
    }

    if (lastIndex < normalizedText.length) {
      container.appendChild(document.createTextNode(normalizedText.slice(lastIndex).normalize('NFC')))
    }
  }

  async function search () {
    results.replaceChildren()

    const query = input.value.trim()
    if (!query) {
      state.resultItems = []
      state.activeIndex = -1
      input.removeAttribute('aria-activedescendant')
      input.setAttribute('aria-expanded', 'false')
      return
    }
    if (!state.isReady) return

    const normalizedQuery = normalizeText(query)
    const cacheKey = normalizedQuery.toLowerCase()
    if (state.queryCache.has(cacheKey)) {
      const cached = state.queryCache.get(cacheKey)
      state.queryCache.delete(cacheKey)
      state.queryCache.set(cacheKey, cached)

      if (cached.hits.length === 0) {
        showEmptyState()
        return
      }

      displayGroupedResults(cached.grouped, cached.regex)
      return
    }

    try {
      const hits = await state.index.searchAsync(normalizedQuery, 100)

      if (hits.length === 0) {
        setCache(cacheKey, { hits: [], grouped: null, regex: null })
        showEmptyState()
        return
      }

      const regex = buildSearchRegex(query)
      const grouped = groupResultsByParent(hits)
      setCache(cacheKey, { hits, grouped, regex })
      displayGroupedResults(grouped, regex)
    } catch (error) {
      console.error('Search error:', error)
      showErrorState()
    }
  }

  function groupResultsByParent (hits) {
    return hits.reduce((groups, id) => {
      const page = state.docMap.get(id)
      if (!page) return groups

      const { parent } = page

      if (!groups[parent]) {
        if (!state.parentCache.has(parent)) {
          state.parentCache.set(parent, getParentData(parent))
        }
        groups[parent] = { ...state.parentCache.get(parent), pages: [] }
      }

      groups[parent].pages.push(page)
      return groups
    }, {})
  }

  function displayGroupedResults (grouped, regex) {
    const fragment = document.createDocumentFragment()
    let optionIndex = 0

    Object.values(grouped).forEach(group => {
      fragment.appendChild(createGroupElement(group, regex, () => optionIndex++))
    })

    results.appendChild(fragment)
    state.resultItems = Array.from(results.querySelectorAll('.search-link'))
    state.activeIndex = -1
    input.removeAttribute('aria-activedescendant')
    input.setAttribute('aria-expanded', state.resultItems.length > 0 ? 'true' : 'false')
  }

  function createGroupElement (group, regex, getNextIndex) {
    const div = document.createElement('div')
    div.className = 'search-group'
    div.setAttribute('role', 'group')
    div.setAttribute('aria-label', group.title)

    const title = document.createElement('div')
    title.className = 'search-group-header has-icon'
    if (group.iconNode) {
      title.appendChild(group.iconNode.cloneNode(true))
    }
    const h3 = document.createElement('h3')
    h3.className = 'search-group-title'
    h3.textContent = group.title
    title.appendChild(h3)

    const list = document.createElement('ul')
    list.className = 'search-group-list'
    list.setAttribute('role', 'none')

    group.pages.forEach(page => {
      list.appendChild(createPageElement(page, regex, getNextIndex()))
    })

    div.appendChild(title)
    div.appendChild(list)
    return div
  }

  function createPageElement (page, regex, index) {
    const li = document.createElement('li')
    li.className = 'search-item'
    li.setAttribute('role', 'none')

    const a = document.createElement('a')
    a.className = 'search-link'
    a.href = page.url
    a.setAttribute('role', 'option')
    a.setAttribute('id', `search-option-${index}`)
    a.setAttribute('aria-selected', 'false')
    a.tabIndex = -1

    const titleDiv = document.createElement('div')
    titleDiv.className = 'search-title'
    renderHighlighted(titleDiv, page.title, regex)
    a.appendChild(titleDiv)

    const summaryText = extractSnippet(page, regex)
    if (summaryText) {
      const summaryDiv = document.createElement('div')
      summaryDiv.className = 'search-summary truncate-multiline'
      renderHighlighted(summaryDiv, summaryText, regex)
      a.appendChild(summaryDiv)
    }

    li.appendChild(a)
    return li
  }

  function getParentData (parentName) {
    const el = document.querySelector(`[data-name="${parentName}"]`)

    if (!el) return { title: parentName, iconNode: null }

    return {
      title: el.textContent.trim(),
      iconNode: el.querySelector(':scope > svg')
    }
  }

  function updateActiveOption (newIndex) {
    if (!state.resultItems.length) return

    if (state.activeIndex >= 0 && state.resultItems[state.activeIndex]) {
      const prev = state.resultItems[state.activeIndex]
      prev.classList.remove('is-selected')
      prev.setAttribute('aria-selected', 'false')
    }

    state.activeIndex = newIndex

    if (state.activeIndex >= 0 && state.resultItems[state.activeIndex]) {
      const current = state.resultItems[state.activeIndex]
      current.classList.add('is-selected')
      current.setAttribute('aria-selected', 'true')
      input.setAttribute('aria-activedescendant', current.id)
      current.scrollIntoView({ block: 'nearest' })
    } else {
      input.removeAttribute('aria-activedescendant')
    }
  }

  function handleKeydown (event) {
    if (!state.resultItems.length) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextIndex = state.activeIndex < state.resultItems.length - 1
        ? state.activeIndex + 1
        : 0
      updateActiveOption(nextIndex)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const prevIndex = state.activeIndex > 0
        ? state.activeIndex - 1
        : state.resultItems.length - 1
      updateActiveOption(prevIndex)
      return
    }

    if (event.key === 'Home' && state.activeIndex >= 0) {
      event.preventDefault()
      updateActiveOption(0)
      return
    }

    if (event.key === 'End' && state.activeIndex >= 0) {
      event.preventDefault()
      updateActiveOption(state.resultItems.length - 1)
      return
    }

    if (event.key === 'Enter') {
      if (state.activeIndex >= 0 && state.resultItems[state.activeIndex]) {
        event.preventDefault()
        state.resultItems[state.activeIndex].click()
      }
    }
  }

  function initSearchEvents () {
    input.addEventListener('focus', initSearch)
    input.addEventListener('keydown', handleKeydown)

    input.addEventListener('keyup', event => {
      const isNavKey =
        event.key === 'ArrowDown' ||
        event.key === 'ArrowUp' ||
        event.key === 'Enter' ||
        event.key === 'Escape' ||
        event.key === 'Home' ||
        event.key === 'End'

      if (isNavKey) return

      const isRelevantKey =
        event.key.length === 1 ||
        event.key === 'Backspace' ||
        event.key === 'Delete'

      if (!isRelevantKey) return

      clearTimeout(state.debounceTimer)
      state.debounceTimer = setTimeout(() => {
        if (!state.isReady) {
          initSearch()
        } else {
          search().catch(console.error)
        }
      }, 200)
    })
  }

  initSearchEvents()
})()