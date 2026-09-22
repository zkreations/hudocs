import { normalizeText } from './text'

export function createIndexLoader () {
  const index = new FlexSearch.Document({
    document: {
      id: 'id',
      index: [
        { field: 'title', tokenize: 'forward' },
        { field: 'content', tokenize: 'forward' }
      ]
    }
  })
  const docMap = new Map()
  let isReady = false
  let isLoading = false

  async function loadIndex (dataURL, onLoadingChange) {
    if (isReady || isLoading) return

    isLoading = true
    if (onLoadingChange) onLoadingChange(true)

    try {
      const response = await fetch(dataURL)

      if (!response.ok) {
        throw new Error(`Failed to load search data: ${response.status}`)
      }

      const rows = await response.json()
      docMap.clear()

      rows.forEach(([id, url, title, parent, summary, content]) => {
        docMap.set(id, { url, title, parent, summary, content })
        index.add({
          id,
          title: normalizeText(title),
          content: normalizeText(`${parent} ${summary} ${content}`)
        })
      })

      isReady = true
    } finally {
      isLoading = false
      if (onLoadingChange) onLoadingChange(false)
    }
  }

  async function search (query, limit = 50) {
    if (!isReady) return []

    const normalized = normalizeText(query)
    const results = await index.searchAsync(normalized, { limit })
    const hits = []
    const seen = new Set()

    results.forEach((fr) => {
      fr.result.forEach((id) => {
        if (!seen.has(id)) {
          seen.add(id)
          hits.push(id)
        }
      })
    })

    return hits
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
