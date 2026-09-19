---
title: Headings and Anchors
weight: 2
---

Hudocs generates anchor links for headings and an interactive Table of Contents (TOC). Active section tracking uses the native `IntersectionObserver` API.

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

## Scrollspy with IntersectionObserver

In Hudocs 2.0, active section tracking uses `IntersectionObserver` instead of the previous implementation based on `scroll` and `resize` events:

* Continuous `scroll` and `resize` listeners used by the previous implementation were removed.
* `IntersectionObserver` detects when headings enter or leave the observation area.
* The corresponding section is marked as active in the Table of Contents.

## Responsive Layout

In development...
