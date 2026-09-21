---
title: Documentation Tree
weight: 1
---

Hudocs generates a hierarchical sidebar documentation tree automatically from the folder structure in `content/docs/<version>/`. Sections and pages are discovered and structured without requiring manual menu declarations in `hugo.toml`.

## Hierarchical Structure

Navigation is generated from the content's folder structure. A directory containing an `_index.md` file acts as a menu section:

```text
content/docs/latest/
├── _index.md
└── guides/                     # Main section (Level 0)
    ├── _index.md
    ├── navigation.md           # Leaf page (Level 1)
    └── advanced/               # Sub-section (Level 1)
        ├── _index.md
        └── deep-dive.md        # Leaf page (Level 2)
```

Hudocs does not set a limit on nesting levels. To keep navigation readable, a 2- or 3-level hierarchy is recommended.

## Ordering Pages and Sections

Items are sorted in ascending order according to the `weight` parameter in their front matter:

```markdown
---
title: Advanced Configuration
weight: 2
---
```

Pages with a lower `weight` value appear first. When `weight` is omitted, Hugo applies its default sorting order.

## Active State

When a reader visits a page:

* The active page link receives the `.is-active` class.
* Ancestor sections receive the `.is-current` class.
* Active section accordions/toggles open automatically on page load.

## Section Redirects

A section can redirect directly to one of its pages using the `redirect` layout:

```markdown
---
title: Guides
icon: book-open
layout: redirect
redirect: "/navigation"
weight: 2
---
```

The `redirect` parameter takes the relative destination path. Hugo generates the link with the corresponding language prefix and handles the redirect via a `meta` header.

## Navigation Icons

You can assign an icon from the [Meteor Icons](https://meteoricons.com/) catalog to a page or section:

```markdown
---
title: Documentation Tree
icon: align-left
---
```

Icons are rendered as inline SVGs using the theme's internal component.

## Status Badges

To display a badge in the menu, add `badge: true`:

```markdown
---
title: Webhooks
icon: zap
badge: true
badge_text: "New"
---
```

* If `badge_text` is not defined, `site.Params.docs_badge_text` (or `site.Params.badge_text`) or the default translated value is used.
* The badge is also displayed next to the page's `<h1>` title.

## Hiding Pages from Navigation

To publish a page without showing it in the sidebar documentation tree, use `hidden: true` in the front matter:

```markdown
---
title: Unlisted Guide
hidden: true
---
```

This parameter hides the page from the automatic documentation hierarchy. Note that `hidden` only applies to content pages in the tree; to configure global sidebar links like GitHub or shortcuts, see the [Global Menus](/docs/latest/guides/menus/) guide.
