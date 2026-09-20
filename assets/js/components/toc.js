const TOC = document.querySelector('.toc')
const DOCS = document.querySelector('.article-body')
const VISIBLE_CLASS = 'is-visible'

function initToc () {
  if (!TOC || !DOCS) return

  const headings = Array.from(DOCS.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]'))
  const tocLinks = TOC.querySelectorAll('a')
  if (!headings.length || !tocLinks.length) return

  const intersecting = new Set()

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
        if (headings[i].getBoundingClientRect().top <= 100) {
          activeHeading = headings[i]
          break
        }
      }
    }

    if (!activeHeading && headings.length) {
      activeHeading = headings[0]
    }

    if (activeHeading) {
      const activeLink = TOC.querySelector(`a[href="#${activeHeading.id}"]`)
      if (activeLink && !activeLink.classList.contains(VISIBLE_CLASS)) {
        tocLinks.forEach((link) => link.classList.remove(VISIBLE_CLASS))
        activeLink.classList.add(VISIBLE_CLASS)
      }
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        intersecting.add(entry.target)
      } else {
        intersecting.delete(entry.target)
      }
    })
    updateActive()
  }, {
    rootMargin: '-70px 0px -75% 0px'
  })

  headings.forEach((heading) => observer.observe(heading))
}

initToc()
