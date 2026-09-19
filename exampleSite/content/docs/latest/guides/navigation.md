---
title: Navigation and Menus
weight: 1
---

Hudocs generates a hierarchical sidebar menu from the folder structure in `content/`. Sections can include nested pages, icons, badges, and an order defined using `weight`.

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
title: Navigation and Menus
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

* If `badge_text` is not defined, `site.Params.badge_text` or the default translated value is used.
* The badge is also displayed next to the page's `<h1>` title.

## Hiding Pages from Navigation

To publish a page without showing it in the sidebar menu, use `hidden: true`:

```markdown
---
title: Unlisted Guide
hidden: true
---
```

This parameter can be used for landing pages, utilities, or redirects that should not appear in the navigation.

## Global Menus and External Links

In addition to the automatic documentation tree, Hudocs supports global links rendered at the bottom of the sidebar using Hugo's standard menu configuration (`menus.main`).

You can declare these links in `hugo.toml`:

```toml
[menus]
  [[menus.main]]
    pageRef = "/docs"
    weight = 1

  [[menus.main]]
    name = "GitHub"
    url = "https://github.com/zkreations/hudocs"
    weight = 2
```

* **Internal links:** use `pageRef` pointing to any section or page. Hudocs automatically retrieves the title and localized URL for each language directly from the target page's front matter.
* **External links:** use `url` and `name`. Hudocs applies `target="_blank"`, `rel="noreferrer noopener"`, and displays the `arrow-up-right` icon automatically.
* **Custom icons:** add `[menus.main.params]` with `icon = "name"` to replace the default icon.
* **Translations for non-page items:** define an `identifier` to translate external or custom menu labels using the `i18n` dictionary.
