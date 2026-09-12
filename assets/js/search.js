/*
{{- $indexes := dict -}}
{{- range .Site.Sections -}}
  {{- $file := printf "json/%s.%s.index.json" $.Language.Lang .Section -}}
  {{- $data := resources.Get "json/index.json" | resources.ExecuteAsTemplate $file . | resources.Minify | resources.Fingerprint -}}
  {{- $indexes = merge $indexes (dict .Section $data.RelPermalink) -}}
{{- end -}}
*/

const searchIndexes = {{ $indexes | jsonify }}
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
  const parts = window.location.pathname.split('/').filter(Boolean)
  if (parts.length > 0) {
    return parts[0] === '{{ .Language.Lang }}' ? parts[1] : parts[0]
  }
  return null
}

function showEmptyState () {
  const el = document.createElement('p')
  el.className = 'search-empty fs-7'
  el.textContent = '{{ i18n "no_results" }}'
  results.appendChild(el)
}

async function initSearch () {
  if (isReady || isLoading) return

  const version = getCurrentVersion()
  const dataURL = searchIndexes[version]
  if (!dataURL) return

  isLoading = true
  input.removeEventListener('focus', initSearch)
  input.required = true

  try {
    const response = await fetch(dataURL)

    if (!response.ok) {
      throw new Error(`Failed to load search data: ${response.status}`)
    }

    const rows = await response.json()
    docMap = new Map()

    rows.forEach(([id, url, title, parent, summary, content]) => {
      docMap.set(id, { url, title, parent, summary })
      index.add(id, `${title} ${content}`)
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

    if (hits.length === 0) {
      showEmptyState()
      return
    }

    const grouped = groupResultsByParent(hits)
    displayGroupedResults(grouped)
  } catch (error) {
    console.error('Search error:', error)
  }
}

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

function displayGroupedResults (grouped) {
  const fragment = document.createDocumentFragment()

  Object.values(grouped).forEach(group => {
    fragment.appendChild(createGroupElement(group))
  })

  results.appendChild(fragment)
}

function createGroupElement (group) {
  const div = document.createElement('div')
  div.className = 'search-group'

  const title = document.createElement('div')
  title.className = 'search-group-title has-icon'
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

function createPageElement (page) {
  const li = document.createElement('li')
  li.className = 'search-item'

  const a = document.createElement('a')
  a.className = 'search-link'
  a.href = page.url

  const titleDiv = document.createElement('div')
  titleDiv.className = 'search-title'
  titleDiv.textContent = page.title

  a.appendChild(titleDiv)

  if (page.summary) {
    const summaryDiv = document.createElement('div')
    summaryDiv.className = 'search-summary truncate-multiline'
    summaryDiv.textContent = page.summary
    a.appendChild(summaryDiv)
  }

  li.appendChild(a)
  return li
}

function escapeHTML (str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

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