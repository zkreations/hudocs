export function normalizeText (str) {
  if (!str) return ''
  return str
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}

export function buildSearchRegex (query) {
  const terms = query.trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return null

  const patterns = terms.map((term) => {
    const normalized = normalizeText(term)
    return Array.from(normalized).map((char) => {
      const escaped = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      return `${escaped}\\p{Diacritic}*`
    }).join('')
  })

  return new RegExp(`(${patterns.join('|')})`, 'giu')
}

export function extractSnippet (page, regex) {
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

