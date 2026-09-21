const TOC = document.querySelector('.toc')
const DOCS = document.querySelector('.article-body')
const VISIBLE_CLASS = 'is-visible'

function initToc () {
  if (!TOC || !DOCS) return

  const headings = Array.from(DOCS.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]'))
  const tocLinks = TOC.querySelectorAll('a')
  if (!headings.length || !tocLinks.length) return

  const tocToggle = TOC.querySelector('.toc-toggle')
  const tocCurrent = TOC.querySelector('.toc-current')

  const linkMap = new Map()
  headings.forEach((heading) => {
    linkMap.set(heading, TOC.querySelector(`a[href="#${heading.id}"]`))
  })

  let headingTops = []
  let currentActiveLink = null
  let isClickScrolling = false
  let clickTimeout = null
  let ticking = false
  let headerOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 0

  function updateHeadingTops () {
    headingTops = headings.map((h) => ({
      heading: h,
      top: h.getBoundingClientRect().top + window.scrollY
    }))
  }

  function setActiveHeading (heading) {
    if (!heading) return
    const activeLink = linkMap.get(heading)
    if (activeLink && activeLink !== currentActiveLink) {
      if (currentActiveLink) currentActiveLink.classList.remove(VISIBLE_CLASS)
      activeLink.classList.add(VISIBLE_CLASS)
      currentActiveLink = activeLink
      if (tocCurrent) tocCurrent.textContent = activeLink.textContent.trim()
    }
  }

  function updateActive () {
    if (isClickScrolling) return

    const scrollY = window.scrollY
    const scrollBottom = window.innerHeight + scrollY
    const docHeight = document.documentElement.scrollHeight

    if (scrollBottom >= docHeight - 10 && headingTops.length) {
      setActiveHeading(headingTops[headingTops.length - 1].heading)
      return
    }

    const scrollPosition = scrollY + headerOffset
    let activeHeading = null

    for (let i = headingTops.length - 1; i >= 0; i--) {
      if (scrollPosition >= headingTops[i].top) {
        activeHeading = headingTops[i].heading
        break
      }
    }

    if (!activeHeading && headingTops.length) {
      activeHeading = headingTops[0].heading
    }

    setActiveHeading(activeHeading)
  }

  function onScroll () {
    if (isClickScrolling) return

    if (!ticking) {
      requestAnimationFrame(() => {
        updateActive()
        ticking = false
      })
      ticking = true
    }
  }

  TOC.addEventListener('click', (e) => {
    const link = e.target.closest('a')
    if (!link) return

    isClickScrolling = true
    clearTimeout(clickTimeout)

    if (currentActiveLink) currentActiveLink.classList.remove(VISIBLE_CLASS)
    link.classList.add(VISIBLE_CLASS)
    currentActiveLink = link
    if (tocCurrent) tocCurrent.textContent = link.textContent.trim()
    if (tocToggle) tocToggle.click()

    const onScrollEnd = () => {
      isClickScrolling = false
      clearTimeout(clickTimeout)
      window.removeEventListener('scrollend', onScrollEnd)
    }

    if ('onscrollend' in window) {
      window.addEventListener('scrollend', onScrollEnd, { once: true })
    }
    clickTimeout = setTimeout(onScrollEnd, 1000)
  })

  updateHeadingTops()
  updateActive()

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', () => {
    headerOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 0
    updateHeadingTops()
    updateActive()
  }, { passive: true })
  window.addEventListener('load', updateHeadingTops, { once: true })
}

initToc()
