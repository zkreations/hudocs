const TOC = document.querySelector('.toc')
const DOCS = document.querySelector('.article-body')
const VISIBLE_CLASS = 'is-visible'

function initToc () {
  if (!TOC || !DOCS) return

  const headings = Array.from(DOCS.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]'))
  const tocLinks = TOC.querySelectorAll('a')
  if (!headings.length || !tocLinks.length) return

  const linkMap = new Map()
  headings.forEach((heading) => {
    linkMap.set(heading, TOC.querySelector(`a[href="#${heading.id}"]`))
  })

  const intersecting = new Set()
  const above = new Set()
  let currentActiveLink = null

  function updateActive () {
    let activeHeading = null

    for (const heading of headings) {
      if (intersecting.has(heading)) {
        activeHeading = heading
        break
      }
    }

    if (!activeHeading) {
      for (let i = headings.length - 1; i >= 0; i--) {
        if (above.has(headings[i])) {
          activeHeading = headings[i]
          break
        }
      }
    }

    if (!activeHeading && headings.length) {
      activeHeading = headings[0]
    }

    if (activeHeading) {
      const activeLink = linkMap.get(activeHeading)
      if (activeLink && activeLink !== currentActiveLink) {
        if (currentActiveLink) currentActiveLink.classList.remove(VISIBLE_CLASS)
        activeLink.classList.add(VISIBLE_CLASS)
        currentActiveLink = activeLink
      }
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        intersecting.add(entry.target)
        above.delete(entry.target)
      } else {
        intersecting.delete(entry.target)
        if (entry.boundingClientRect.top < 100) {
          above.add(entry.target)
        } else {
          above.delete(entry.target)
        }
      }
    })
    updateActive()
  }, {
    rootMargin: '-70px 0px -75% 0px'
  })

  headings.forEach((heading) => observer.observe(heading))
}

initToc()

