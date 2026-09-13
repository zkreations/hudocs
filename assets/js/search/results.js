import { extractSnippet } from './text'

function getParentData (parentName) {
  const el = document.querySelector(`[data-name="${parentName}"]`)

  if (!el) return { title: parentName, iconNode: null }

  return {
    title: el.textContent.trim(),
    iconNode: el.querySelector(':scope > svg')
  }
}

export function groupResultsByParent (hits, getPage, parentCache) {
  return hits.reduce((groups, id) => {
    const page = getPage(id)
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

export function renderHighlighted (container, text, regex) {
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

  group.pages.forEach((page) => {
    list.appendChild(createPageElement(page, regex, getNextIndex()))
  })

  div.appendChild(title)
  div.appendChild(list)
  return div
}

export function renderResults (resultsContainer, grouped, regex) {
  resultsContainer.replaceChildren()
  const fragment = document.createDocumentFragment()
  let optionIndex = 0

  Object.values(grouped).forEach((group) => {
    fragment.appendChild(createGroupElement(group, regex, () => optionIndex++))
  })

  resultsContainer.appendChild(fragment)
  return Array.from(resultsContainer.querySelectorAll('.search-link'))
}

export function showEmptyState (resultsContainer, message) {
  resultsContainer.replaceChildren()
  const el = document.createElement('p')
  el.className = 'search-empty'
  el.textContent = message
  resultsContainer.appendChild(el)
}

export function showErrorState (resultsContainer, message) {
  resultsContainer.replaceChildren()
  const el = document.createElement('p')
  el.className = 'search-error'
  el.setAttribute('role', 'alert')
  el.textContent = message
  resultsContainer.appendChild(el)
}

export function clearResults (resultsContainer) {
  resultsContainer.replaceChildren()
}

