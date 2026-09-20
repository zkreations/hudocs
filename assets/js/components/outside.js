const ACTIVE_CLASS = 'is-active'
let activeTrigger = null
let activeTarget = null

function deactivateAll () {
  if (!activeTrigger && !activeTarget) return

  if (activeTrigger) {
    activeTrigger.classList.remove(ACTIVE_CLASS)
    activeTrigger.setAttribute('aria-expanded', 'false')
    activeTrigger = null
  }
  if (activeTarget) {
    activeTarget.classList.remove(ACTIVE_CLASS)
    activeTarget = null
  }
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

      const wasActive = target === activeTarget || target.classList.contains(ACTIVE_CLASS)
      deactivateAll()

      if (!wasActive) {
        trigger.classList.add(ACTIVE_CLASS)
        trigger.setAttribute('aria-expanded', 'true')
        target.classList.add(ACTIVE_CLASS)
        activeTrigger = trigger
        activeTarget = target
        const input = target.querySelector('input')
        if (input) input.focus()
      }
      return
    }

    if (!activeTrigger && !activeTarget) return

    const hitArea = activeTarget ? (activeTarget.querySelector('[data-dialog]') || activeTarget) : null
    const clickedInside = (hitArea && hitArea.contains(e.target)) || (activeTrigger && activeTrigger.contains(e.target))

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