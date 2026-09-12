export function createCombobox (inputEl) {
  let activeIndex = -1
  let resultItems = []

  function updateActiveOption (newIndex) {
    if (!resultItems.length) return

    if (activeIndex >= 0 && resultItems[activeIndex]) {
      const prev = resultItems[activeIndex]
      prev.classList.remove('is-selected')
      prev.setAttribute('aria-selected', 'false')
    }

    activeIndex = newIndex

    if (activeIndex >= 0 && resultItems[activeIndex]) {
      const current = resultItems[activeIndex]
      current.classList.add('is-selected')
      current.setAttribute('aria-selected', 'true')
      inputEl.setAttribute('aria-activedescendant', current.id)
      current.scrollIntoView({ block: 'nearest' })
    } else {
      inputEl.removeAttribute('aria-activedescendant')
    }
  }

  function setItems (items) {
    resultItems = items
    activeIndex = -1
    inputEl.removeAttribute('aria-activedescendant')
    inputEl.setAttribute('aria-expanded', items.length > 0 ? 'true' : 'false')
  }

  function reset () {
    resultItems = []
    activeIndex = -1
    inputEl.removeAttribute('aria-activedescendant')
    inputEl.setAttribute('aria-expanded', 'false')
  }

  function handleKeydown (event) {
    if (!resultItems.length) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextIndex = activeIndex < resultItems.length - 1
        ? activeIndex + 1
        : 0
      updateActiveOption(nextIndex)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const prevIndex = activeIndex > 0
        ? activeIndex - 1
        : resultItems.length - 1
      updateActiveOption(prevIndex)
      return
    }

    if (event.key === 'Home' && activeIndex >= 0) {
      event.preventDefault()
      updateActiveOption(0)
      return
    }

    if (event.key === 'End' && activeIndex >= 0) {
      event.preventDefault()
      updateActiveOption(resultItems.length - 1)
      return
    }

    if (event.key === 'Enter') {
      if (activeIndex >= 0 && resultItems[activeIndex]) {
        event.preventDefault()
        resultItems[activeIndex].click()
      }
    }
  }

  return {
    setItems,
    reset,
    handleKeydown
  }
}

