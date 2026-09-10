const ACTIVE_CLASS = 'is-active'

function deactivateAll () {
  document.querySelectorAll(`[data-outside].${ACTIVE_CLASS}`).forEach((button) => {
    button.classList.remove(ACTIVE_CLASS)
    const target = document.getElementById(button.dataset.outside)
    if (target) target.classList.remove(ACTIVE_CLASS)
  })
}

function initOutside () {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-outside]')
    const closeBtn = e.target.closest('[data-close]')

    if (closeBtn) {
      deactivateAll()
      return
    }

    if (trigger) {
      const target = document.getElementById(trigger.dataset.outside)
      if (!target) return

      const wasActive = target.classList.contains(ACTIVE_CLASS)
      deactivateAll()

      if (!wasActive) {
        trigger.classList.add(ACTIVE_CLASS)
        target.classList.add(ACTIVE_CLASS)
        const input = target.querySelector('input')
        if (input) input.focus()
      }
      return
    }

    const activeButtons = document.querySelectorAll(`[data-outside].${ACTIVE_CLASS}`)
    if (!activeButtons.length) return

    let clickedInside = false
    activeButtons.forEach((button) => {
      const target = document.getElementById(button.dataset.outside)
      if (target) {
        const hitArea = target.querySelector('[data-dialog]') || target
        if (hitArea.contains(e.target) || button.contains(e.target)) {
          clickedInside = true
        }
      }
    })

    if (!clickedInside) {
      deactivateAll()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      deactivateAll()
    }
  })
}

initOutside()