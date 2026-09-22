---
title: Global Menus
weight: 2
---

Hudocs separates documentation content from global navigation. While the documentation tree is generated automatically from content directories, global navigation links are managed using Hugo's standard menu system (`menus.main`) in `hugo.toml` and rendered at the bottom of the sidebar.

## Declaration

Declare menu items under the `[menus]` table in `hugo.toml`:

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

Items appear in ascending order based on `weight`.

## Internal Links with pageRef

For internal destinations like the documentation root, use `pageRef`:

```toml
[[menus.main]]
  pageRef = "/docs"
  weight = 1
```

* Hugo resolves the target page in the active language automatically.
* Titles and localized paths are inferred directly from the target page's front matter (`title` in `_index.md` and `_index.<lang>.md`).
* When visiting the page or its sub-pages, the menu item automatically receives the `.is-current` and `.is-active` CSS classes.
* The `hidden: true` front matter parameter only hides pages from the automatic documentation tree; it does not hide items explicitly declared in `menus.main`.

## External Links

For external destinations, provide `name` and `url`:

```toml
[[menus.main]]
  name = "GitHub"
  url = "https://github.com/zkreations/hudocs"
  weight = 2
```

Hudocs automatically secures external links by appending `target="_blank"` and `rel="noreferrer noopener"`. Additionally, an `arrow-up-right` indicator is displayed on the right edge.

## Menu Icons

Menu items support icons from the Meteor Icons set:

1. **Explicit icon:** define `icon` within `params`:

```toml
[[menus.main]]
  name = "GitHub"
  url = "https://github.com/zkreations/hudocs"
  weight = 2
  [menus.main.params]
    icon = "github"
```

2. **Inherited icon:** for items using `pageRef`, if `params.icon` is omitted, Hudocs automatically inherits the `icon` defined in the target page's front matter.

On external links with custom icons, the external link arrow remains visible on the right side.

## Multilingual Translations

### Internal Links

When using `pageRef`, translations are automatic. Hugo matches the localized `.md` file for the active language.

### External Links without i18n

To translate an external link without defining keys in `i18n`, declare the entry globally with an `identifier` and override the `name` inside the corresponding language table in `hugo.toml`:

```toml
[menus]
  [[menus.main]]
    identifier = "support"
    name = "Support"
    url = "https://example.com/support"
    weight = 10

[languages.es.menus]
  [[languages.es.menus.main]]
    identifier = "support"
    name = "Soporte"
```

Hugo merges items sharing the same `identifier`, allowing labels to be translated per language while declaring URLs and weights once.

### Translations with i18n

You can also provide an `identifier` and define translations in `i18n/<lang>.toml`:

```toml
[support]
other = "Soporte"
```

Hudocs checks `i18n` for the `identifier` before falling back to `name`.

