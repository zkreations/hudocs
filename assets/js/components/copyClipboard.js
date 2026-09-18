const blocks = document.querySelectorAll('pre > code')
const article = document.querySelector('article')

function addCopyButtons () {
  if (!article || blocks.length === 0) return
  if (!navigator || !navigator.clipboard) return

  const i18nAttr = article.getAttribute('data-i18n')
  if (!i18nAttr) return

  const i18n = JSON.parse(i18nAttr)
  const COPY_TEXT = i18n.copy
  const COPIED_TEXT = i18n.copied
  const clipboard = navigator.clipboard

  blocks.forEach((codeBlock) => {
    const pre = codeBlock.parentNode
    if (!pre || !pre.parentNode.classList.contains('highlight')) return

    const button = document.createElement('button')
    button.className = 'code-copy tooltip tooltip-start'
    button.setAttribute('aria-label', COPY_TEXT)
    button.innerHTML = '<svg viewBox="0 0 24 24" class="i i-copy"><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path><rect width="13" height="13" x="9" y="9" rx="2"></rect></svg>'
    pre.parentNode.insertBefore(button, pre)
  })

  article.addEventListener('click', (e) => {
    const button = e.target.closest('.code-copy')
    if (!button) return

    const pre = button.nextElementSibling
    const code = pre ? pre.querySelector('code') : null
    if (!code) return

    clipboard.writeText(code.textContent).then(() => {
      button.blur()
      button.setAttribute('aria-label', COPIED_TEXT)
      setTimeout(() => {
        button.setAttribute('aria-label', COPY_TEXT)
      }, 2000)
    })
  })
}

addCopyButtons()
