import { normalizeText } from './text'

export function createIndexLoader () {
  const index = new FlexSearch.Index({
    tokenize: 'forward',
    cache: true
  })
  const docMap = new Map()
  let isReady = false
  let isLoading = false
  let abortController = null

  async function loadIndex (dataURL, onLoadingChange) {
    if (isReady || isLoading) return

    if (abortController) {
      abortController.abort()
    }
    abortController = new AbortController()

    isLoading = true
    if (onLoadingChange) onLoadingChange(true)

    try {
      const response = await fetch(dataURL, {
        signal: abortController.signal
      })

      if (!response.ok) {
        throw new Error(`Failed to load search data: ${response.status}`)
      }

      const rows = await response.json()
      docMap.clear()

      rows.forEach(([id, url, title, parent, summary, content]) => {
        docMap.set(id, { url, title, parent, summary, content })
        index.add(id, normalizeText(`${title} ${content}`))
      })

      isReady = true
    } finally {
      isLoading = false
      if (onLoadingChange) onLoadingChange(false)
    }
  }

  async function search (query, limit = 100) {
    if (!isReady) return []
    return index.searchAsync(normalizeText(query), limit)
  }

  function getPage (id) {
    return docMap.get(id)
  }

  return {
    loadIndex,
    search,
    getPage,
    isReady: () => isReady,
    isLoading: () => isLoading
  }
}

