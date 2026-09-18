---
title: Project Structure
weight: 3
---

Hudocs organizes Hugo content by versions and sections. The `content/` structure determines how pages are grouped in the sidebar menu.

## Multi-Version Architecture

By default, Hudocs uses the top-level folders of `content/` as versions:

```text
content/
├── latest/
│   ├── _index.md
│   ├── getting-started/
│   │   ├── _index.md
│   │   ├── installation.md
│   │   └── ...
│   └── guides/
│       ├── _index.md
│       └── ...
├── 1.8/
│   ├── _index.md
│   └── ...
└── 1.0/
    ├── _index.md
    └── ...
```

Each root folder (`latest`, `1.8`, `1.0`) represents a version. Hudocs detects these sections and displays them in the version selector.

## Single-Version Architecture

For sites without multiple versions, you can place content in a single section:

```text
content/
└── docs/
    ├── _index.md
    ├── installation.md
    └── configuration.md
```

## Content Files

### Section Index

Sections can use `_index.md` to define their title, icon, and behavior. To redirect a section to a page:

```markdown
---
title: Getting Started
icon: rocket
layout: redirect
redirect: "/installation"
weight: 1
---
```

### Content Pages

Individual pages use Markdown files with front matter:

```markdown
---
title: Installation
icon: download
weight: 1
badge: true
badge_text: "v2.0"
---

Page content...
```

### Multilingual Files

To create a translation, use Hugo's [multilingual support](https://gohugo.io/content-management/multilingual/). For example, add the language code to the filename:

* `page.md`: default language.
* `page.es.md`: Spanish translation.

Hugo automatically links files belonging to the same page. Any multilingual content structure supported by Hugo is also supported by Hudocs.

## Front Matter Reference

| Field        | Type                 | Description                                        |
| :----------- | :------------------- | :------------------------------------------------- |
| `title`      | {{< type string >}}  | Page title.                                        |
| `icon`       | {{< type string >}}  | Icon from [Meteor Icons](https://meteoricons.com/). |
| `weight`     | {{< type int >}}     | Order in the menu.                                 |
| `badge`      | {{< type boolean >}} | Displays the badge.                                |
| `badge_text` | {{< type string >}}  | Badge text.                                        |
| `badge_url`  | {{< type string >}}  | Badge destination URL.                             |
| `hidden`     | {{< type boolean >}} | Hides the page from the menu.                      |
| `layout`     | {{< type string >}}  | Defines the layout, e.g. `redirect`.               |
| `redirect`   | {{< type string >}}  | Destination path for `layout: redirect`.           |