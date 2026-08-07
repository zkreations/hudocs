/*
{{ $searchDataFile := printf "json/%s.index.json" .Language.Lang }}
{{ $searchData := resources.Get "json/index.json" | resources.ExecuteAsTemplate $searchDataFile . | resources.Minify | resources.Fingerprint }}
*/

const dataJSON = '{{ $searchData.RelPermalink }}'
const input = document.getElementById('search-input')
const results = document.getElementById('search-results')
const currentVersion = document.getElementById('current-version')

const index = FlexSearch.Index({
  tokenize: 'forward',
  cache: true
})

const documents = []

function getCurrentVersion () {
  if (currentVersion) {
    return currentVersion.innerText.trim()
  }

  const path = window.location.pathname.split('/')
  const version = path[1]

  return version || null
}

// Main function to initialize the search
async function initSearch () {
  input.removeEventListener('focus', initSearch)
  input.required = true

  try {
    const response = await fetch(dataJSON)
    const data = await response.json()

    documents.push(...data.documents)

    indexDocuments(documents)
  } catch (error) {
    console.error('Error loading data:', error)
  }

  input.required = false
  search()
}

// Add documents to the search index
function indexDocuments (pages) {
  pages.forEach(page => {
    index.add(page.id, `${page.title} ${page.summary}`)
  })
}

// Function to search and display the results
async function search () {
  results.innerHTML = ''

  if (!input.value) return

  try {
    const hits = await index.searchAsync(input.value, 100)

    const currentVersion = getCurrentVersion()

    const filteredHits = hits.filter(hitId => {
      const page = documents.find(doc => doc.id === hitId)

      return page && page.url.startsWith(`/${currentVersion}/`)
    })

    const groupedHits = groupResultsByParent(filteredHits)

    displayGroupedResults(groupedHits)
  } catch (error) {
    console.error('Error in search:', error)
  }
}

// Group results by parent section
function groupResultsByParent (hits) {
  return hits.reduce((groups, hitId) => {
    const page = documents.find(doc => doc.id === hitId)

    if (!page) return groups

    const parent = page.parent

    const group = groups[parent] || {
      ...getParentData(parent),
      pages: []
    }

    group.pages.push(page)
    groups[parent] = group

    return groups
  }, {})
}

// Function to display the grouped results
// @param groupedHits: Object with grouped results
function displayGroupedResults (groupedHits) {
  Object.values(groupedHits).forEach(group => {
    results.appendChild(createGroupElement(group))
  })
}

// Function to create the HTML element for a group
// @param group: Object with group data
// @returns HTML element
function createGroupElement (group) {
  const groupElement = stringToHTML(`
    <div class="search-group">
      <div class="search-group-title capitalize fs-6 fw-500 has-icon">
        ${group.icon}
        <h3>${group.title}</h3>
      </div>

      <ul class="search-group-list"></ul>
    </div>
  `)

  const groupList = groupElement.querySelector('.search-group-list')

  group.pages.forEach(page => {
    groupList.appendChild(createPageElement(page))
  })

  return groupElement
}

// Function to create the HTML element for a page
// @param page: Object with page data
// @returns HTML element
function createPageElement (page) {
  const summary = truncate(page.summary, 100)

  return stringToHTML(`
    <li class="search-item">
      <a class="search-link" href="${page.url}">
        <div class="search-title fs-6 fw-500">
          ${page.title}
        </div>

        ${summary ? summary : ''}
      </a>
    </li>
  `)
}

function truncate (str, length) {
  return str.length > length
    ? `${str.slice(0, length)}...`
    : str
}

// Function to convert a string to an HTML node
// @param str: String to convert
// @returns HTML node
function stringToHTML (str) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, 'text/html')

  return doc.body.firstChild
}

// Function to initialize search events when the input is focused or when typing
function initSearchEvents () {
  input.addEventListener('focus', initSearch)

  input.addEventListener('keyup', event => {
    if (
      event.key.length === 1 ||
      event.key === 'Backspace' ||
      event.key === 'Delete'
    ) {
      search()
    }
  })
}

// Function to get the parent data (title and icon) for a given parent name
// @param parentName: Name of the parent section
// @returns Object with title and icon
function getParentData (parentName) {
  const element = document.querySelector(`[data-name="${parentName}"]`)

  if (!element) {
    return {
      title: parentName,
      icon: ''
    }
  }

  return {
    title: element.textContent.trim(),
    icon: element.querySelector(':scope > svg')?.outerHTML || ''
  }
}

initSearchEvents()
