const blocks = document.querySelectorAll('pre > code')
const article = document.querySelector('article')

function addCopyButtons () {
  if (!article || blocks.length === 0) return

  const i18n = JSON.parse(article.getAttribute('data-i18n'))
  const COPY_TEXT = i18n.copy
  const COPIED_TEXT = i18n.copied

  if (!navigator || !navigator.clipboard || blocks.length === 0) return

  const clipboard = navigator.clipboard

  blocks.forEach(function (codeBlock) {
    const button = document.createElement('button')
    button.className = 'code-copy'

    button.setAttribute('data-tts', 'up-right')
    button.setAttribute('aria-label', COPY_TEXT)
    button.innerHTML = '<svg viewBox="0 0 24 24" class="i i-copy"><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path><rect width="13" height="13" x="9" y="9" rx="2"></rect></svg>'
    button.addEventListener('click', function () {
      clipboard.writeText(codeBlock.textContent).then(function () {
        button.blur()
        button.setAttribute('aria-label', COPIED_TEXT)
        setTimeout(function () {
          button.setAttribute('aria-label', COPY_TEXT)
        }, 2000)
      })
    })
    const pre = codeBlock.parentNode
    if (pre.parentNode.classList.contains('highlight')) {
      pre.parentNode.insertBefore(button, pre)
    }
  })
}

addCopyButtons()
