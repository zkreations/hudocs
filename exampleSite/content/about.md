---
title: About the project
description: General information about Hudocs and standalone pages.
icon: info
---

Hudocs is a [Hugo](https://gohugo.io/) theme for building technical documentation. In addition to documentation pages, a project can include standalone pages for general information that does not belong to a specific documentation version.

## About Hudocs

Hudocs separates documentation content from general project information. Documentation pages are organized under `content/docs/` and can be associated with different versions, while standalone pages remain outside that structure.

This type of page is useful for content that should be available regardless of which documentation version the user is viewing.

## When to use a standalone page

A standalone page can be used for content such as:

* Project information.
* Contact information.
* Privacy policies.
* Terms of use.
* Credits and attributions.
* Information about the current site.
* Any other content that does not depend on a documentation version.

For example, an `about.md` page located directly in `content/` remains available even when the user switches between documentation versions such as `latest`, `1.8`, and `1.7`.

## Features

### Global scope

Standalone pages do not belong to a specific documentation version. Their content therefore remains available regardless of the selected version.

### Page template

They are rendered using Hudocs' standalone page template. Unlike documentation pages, they do not include the documentation sidebar or the table of contents generated from the page headings.

This allows them to be used as general site pages without depending on the documentation navigation structure.

### Global navigation

Standalone pages can be added to the main navigation using `pageRef`:

```toml
[[menus.main]]
name = "About"
pageRef = "/about"
weight = 10
```

The page can then be part of the site's global navigation without being associated with a specific documentation version.

### Multilingual support

Standalone pages can also use Hugo's multilingual system. For example:

```text
content/
├── about.md
└── about.es.md
```

Hugo selects the appropriate translation based on the site's active language.

## Structure

A basic project structure can look like this:

```text
content/
├── docs/
│   ├── latest/
│   └── 1.8/
├── about.md
└── contact.md
```

In this example, `about.md` and `contact.md` are standalone pages, while the content inside `docs/` belongs to the versioned documentation.

## Example content

A standalone page is not limited to plain text. It can use the same Markdown features available throughout the site:

> Hudocs provides the visual structure and navigation; the content of each page remains the responsibility of the project using the theme.

You can also include lists, links, images, code blocks, and other elements supported by Hugo according to the needs of the page.
