const article = document.querySelector('article')

function addCopyButtons () {
  if (!article || !navigator || !navigator.clipboard) return

  const i18nAttr = article.getAttribute('data-i18n')
  if (!i18nAttr) return

  let i18n
  try {
    i18n = JSON.parse(i18nAttr)
  } catch {
    return
  }

  const COPY_TEXT = i18n.copy
  const COPIED_TEXT = i18n.copied
  const clipboard = navigator.clipboard

  const containers = article.querySelectorAll('.highlight')
  if (containers.length === 0) return

  const templateButton = document.createElement('button')
  templateButton.className = 'code-copy tooltip tooltip-start'
  templateButton.setAttribute('aria-label', COPY_TEXT)
  templateButton.innerHTML = '<svg viewBox="0 0 24 24" class="i i-copy"><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path><rect width="13" height="13" x="9" y="9" rx="2"></rect></svg>'

  containers.forEach((container) => {
    if (container.querySelector('.code-copy')) return
    container.prepend(templateButton.cloneNode(true))
  })

  article.addEventListener('click', (e) => {
    const button = e.target.closest('.code-copy')
    if (!button) return

    const container = button.closest('.highlight')
    if (!container) return

    const code = container.querySelector('.lntable td:last-child code') || container.querySelector('pre > code')
    if (!code) return

    let text = code.textContent
    if (code.querySelector('.ln')) {
      const clone = code.cloneNode(true)
      clone.querySelectorAll('.ln').forEach((ln) => ln.remove())
      text = clone.textContent
    }

    clipboard.writeText(text).then(() => {
      button.setAttribute('aria-label', COPIED_TEXT)
      setTimeout(() => {
        button.setAttribute('aria-label', COPY_TEXT)
      }, 2000)
    }).catch(() => {})
  })
}

addCopyButtons()
