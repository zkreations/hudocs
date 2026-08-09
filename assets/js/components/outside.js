const buttons = document.querySelectorAll('[data-outside]')

const ACTIVE_CLASS = 'is-active'

// Function to handle outside click events
// @param button: Button element with data-outside attribute
// @returns void
function outsideClick(button) {
  if (!button) return

  const target = document.getElementById(button.dataset.outside)

  if (!target) return

  const dialog = target.querySelector('[data-dialog]')

  button.addEventListener('click', () => {
    button.classList.toggle(ACTIVE_CLASS)
    target.classList.toggle(ACTIVE_CLASS)
  })

  const clickOutside = (event) => {
    if (event.target.closest('[data-outside]') === button) {
      return
    }

    if (dialog?.contains(event.target)) {
      return
    }

    button.classList.remove(ACTIVE_CLASS)
    target.classList.remove(ACTIVE_CLASS)
  }

  document.addEventListener('click', clickOutside)

  const close = target.querySelector('[data-close]')

  if (close) {
    close.addEventListener('click', () => {
      button.classList.remove(ACTIVE_CLASS)
      target.classList.remove(ACTIVE_CLASS)
    })
  }

  const keydown = (event) => {
    if (event.key !== 'Escape') return

    button.classList.remove(ACTIVE_CLASS)
    target.classList.remove(ACTIVE_CLASS)
  }

  document.addEventListener('keydown', keydown)
}

buttons.forEach((button) => {
  outsideClick(button)
})
