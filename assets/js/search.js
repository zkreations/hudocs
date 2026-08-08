/*
{{ $searchDataFile := printf "json/%s.index.json" .Language.Lang }}
{{ $searchData := resources.Get "json/index.json" | resources.ExecuteAsTemplate $searchDataFile . | resources.Minify | resources.Fingerprint }}
*/

const dataJSON = '{{ $searchData.RelPermalink }}'
const input = document.getElementById('search-input')
const results = document.getElementById('search-results')
const currentVersionEl = document.getElementById('current-version')

const index = FlexSearch.Index({
  tokenize: 'forward',
  cache: true
})

let docMap = new Map()
let isReady = false
let isLoading = false
let debounceTimer = null

function getCurrentVersion () {
  if (currentVersionEl) {
    return currentVersionEl.innerText.trim()
  }
  const parts = window.location.pathname.split('/')
  return parts[1] || null
}

function showEmptyState () {
  const el = document.createElement('p')
  el.className = 'search-empty fs-7'
  el.textContent = 'No results found.'
  results.appendChild(el)
}

async function initSearch () {
  if (isReady || isLoading) return

  isLoading = true
  input.removeEventListener('focus', initSearch)
  input.required = true

  try {
    const response = await fetch(dataJSON)

    if (!response.ok) {
      throw new Error(`Failed to load search data: ${response.status}`)
    }

    const data = await response.json()
    docMap = new Map(data.documents.map(doc => [doc.id, doc]))

    docMap.forEach((doc, id) => {
      index.add(id, `${doc.title} ${doc.summary}`)
    })

    isReady = true
  } catch (error) {
    console.error('Search init error:', error)
  } finally {
    isLoading = false
    input.required = false
    search().catch(console.error)
  }
}

async function search () {
  results.innerHTML = ''

  if (!input.value) return
  if (!isReady) return

  try {
    const hits = await index.searchAsync(input.value, 100)
    const version = getCurrentVersion()

    const filteredHits = version
      ? hits.filter(id => docMap.get(id)?.url.startsWith(`/${version}/`))
      : hits

    if (filteredHits.length === 0) {
      showEmptyState()
      return
    }

    const grouped = groupResultsByParent(filteredHits)
    displayGroupedResults(grouped)
  } catch (error) {
    console.error('Search error:', error)
  }
}

// Groups search results by their parent page
// @param {Array} hits - Array of document IDs
// @returns {Object} - Grouped results by parent
function groupResultsByParent (hits) {
  const parentCache = new Map()

  return hits.reduce((groups, id) => {
    const page = docMap.get(id)
    if (!page) return groups

    const { parent } = page

    if (!groups[parent]) {
      if (!parentCache.has(parent)) {
        parentCache.set(parent, getParentData(parent))
      }
      groups[parent] = { ...parentCache.get(parent), pages: [] }
    }

    groups[parent].pages.push(page)
    return groups
  }, {})
}

// Displays grouped search results in the DOM
// @param {Object} grouped - Grouped search results
// @returns {void}
function displayGroupedResults (grouped) {
  const fragment = document.createDocumentFragment()

  Object.values(grouped).forEach(group => {
    fragment.appendChild(createGroupElement(group))
  })

  results.appendChild(fragment)
}

// Creates a DOM element for a search result group
// @param {Object} group - Group data containing title, icon, and pages
// @returns {HTMLElement} - The group DOM element
function createGroupElement (group) {
  const div = document.createElement('div')
  div.className = 'search-group'

  const title = document.createElement('div')
  title.className = 'search-group-title capitalize fs-6 fw-500 has-icon'
  title.innerHTML = `${group.icon}<h3>${escapeHTML(group.title)}</h3>`

  const list = document.createElement('ul')
  list.className = 'search-group-list'

  group.pages.forEach(page => {
    list.appendChild(createPageElement(page))
  })

  div.appendChild(title)
  div.appendChild(list)
  return div
}

// Creates a DOM element for an individual search result page
// @param {Object} page - Page data containing title, summary, and URL
// @returns {HTMLElement} - The page DOM element
function createPageElement (page) {
  const summary = truncate(page.summary, 100)

  const li = document.createElement('li')
  li.className = 'search-item'

  const a = document.createElement('a')
  a.className = 'search-link'
  a.href = page.url

  const titleDiv = document.createElement('div')
  titleDiv.className = 'search-title fs-6 fw-500'
  titleDiv.textContent = page.title

  a.appendChild(titleDiv)

  if (summary) {
    const summaryDiv = document.createElement('div')
    summaryDiv.className = 'search-summary'
    summaryDiv.textContent = summary
    a.appendChild(summaryDiv)
  }

  li.appendChild(a)
  return li
}

// Truncates a string to a specified length and adds ellipsis if needed
// @param {string} str - The string to truncate
// @param {number} length - The maximum length of the string
// @returns {string} - The truncated string
function truncate (str, length) {
  return str && str.length > length ? `${str.slice(0, length)}...` : str
}

// Escapes HTML special characters in a string to prevent XSS
// @param {string} str - The string to escape
// @returns {string} - The escaped string
function escapeHTML (str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// Retrieves parent data (title and icon) for a given parent name
// @param {string} parentName - The name of the parent
// @returns {Object} - An object containing the title and icon of the parent
function getParentData (parentName) {
  const el = document.querySelector(`[data-name="${parentName}"]`)

  if (!el) return { title: parentName, icon: '' }

  return {
    title: el.textContent.trim(),
    icon: el.querySelector(':scope > svg')?.outerHTML || ''
  }
}

function initSearchEvents () {
  input.addEventListener('focus', initSearch)

  input.addEventListener('keyup', event => {
    const isRelevantKey =
      event.key.length === 1 ||
      event.key === 'Backspace' ||
      event.key === 'Delete'

    if (!isRelevantKey) return

    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      if (!isReady) {
        initSearch()
      } else {
        search().catch(console.error)
      }
    }, 200)
  })
}

initSearchEvents()