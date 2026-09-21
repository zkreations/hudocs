---
title: Headings and Anchors
weight: 2
---

Hudocs generates anchor links for headings and an interactive Table of Contents (TOC) with active section tracking as you scroll.

## Automatic Heading Anchors

Markdown headings are processed through Hugo's custom render hook `render-heading.html`.

### Anchor Link

When hovering over a heading, a `#` symbol is displayed next to the text:

* Clicking the symbol adds the heading identifier to the URL.
* Users can copy and share direct links to specific sections of the document.
* The link includes an `aria-label` attribute to provide an accessible name for screen readers.

## Table of Contents (TOC)

Each article automatically generates a Table of Contents in the right sidebar.

### Heading Level Configuration

You can control which heading levels are included in the Table of Contents from `hugo.toml`. For example, to include only `<h2>` and `<h3>` headings:

```toml id="2v8f8p"
[markup.tableOfContents]
  startLevel = 2    # Starts at <h2>
  endLevel = 3      # Includes up to <h3>
```

## Scrollspy

Hudocs tracks the active section as the user scrolls through the document:

* Scroll events are throttled using `requestAnimationFrame` for optimal rendering performance.
* Heading vertical positions are calculated relative to the dynamic header offset (`--header-height`).
* The active heading link is marked with `aria-current="location"` and the `.is-visible` class in the Table of Contents.

## Responsive Layout

On smaller screens, the Table of Contents switches from a fixed sidebar to a collapsible dropdown at the top of the article. The dropdown toggle displays the title of the current section and expands to show the full navigation list when clicked.
