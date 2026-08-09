const ACTIVE_CLASS = 'is-active'

// Function to handle outside click events
// @param button: Button element with data-outside attribute
// @returns void
function initOutsideClick(button) {
  const target = document.getElementById(button.dataset.outside)
  if (!target) return

  const dialog = target.querySelector('[data-dialog]')
  const closeButton = target.querySelector('[data-close]')
  const hitArea = dialog ?? target

  const activate = () => {
    button.classList.toggle(ACTIVE_CLASS)
    target.classList.toggle(ACTIVE_CLASS)
  }

  const deactivate = () => {
    button.classList.remove(ACTIVE_CLASS)
    target.classList.remove(ACTIVE_CLASS)
  }

  const onDocumentClick = ({ target: clicked }) => {
    if (!button.contains(clicked) && !hitArea.contains(clicked)) {
      deactivate()
    }
  }

  const onKeydown = ({ key }) => {
    if (key === 'Escape') deactivate()
  }

  button.addEventListener('click', activate)
  closeButton?.addEventListener('click', deactivate)
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
}

document.querySelectorAll('[data-outside]')
  .forEach(initOutsideClick)