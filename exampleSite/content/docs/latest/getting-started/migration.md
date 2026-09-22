---
title: Migration from v1.8
weight: 4
---

This guide outlines breaking changes and modifications when upgrading a documentation site from Hudocs 1.8 to 2.0.

## Content Directory Structure

In Hudocs 1.8, documentation versions resided directly in the root of `content/`:

```text
# Hudocs 1.8 (Old)
content/
└── 1.0/
    ├── _index.md
    └── ...
```

In Hudocs 2.0, all documentation content is grouped under a dedicated section, by default `content/docs/`:

```text
# Hudocs 2.0 (New)
content/
└── docs/
    ├── _index.md
    ├── latest/
    │   ├── _index.md
    │   └── ...
    └── 1.8/
        ├── _index.md
        └── ...
```

Move your documentation version directories inside `content/docs/`. This keeps `content/` clean for standalone pages and posts.

## Removed Shortcodes

### `table` Shortcode

In Hudocs 1.8, responsive tables required wrapping standard Markdown tables inside a `table` shortcode:

```markdown
{{</* table */>}}
| Header 1 | Header 2 |
| :------- | :------- |
| Value A  | Value B  |
{{</* /table */>}}
```

In Hudocs 2.0, the `table` shortcode has been **removed**. Delete the opening and closing `table` shortcode tags. Hudocs now uses Hugo's native `render-table.html` hook to automatically wrap all standard Markdown tables in a responsive container with horizontal scrolling.

### `code` Shortcode

In Hudocs 1.8, custom code presentation was managed through the `code` shortcode:

```markdown
{{</* code lang="js" */>}}
console.log("Hello world");
<---->
Explanatory note.
{{</* /code */>}}
```

In Hudocs 2.0, the `code` shortcode has been **removed**:

* **Standard code blocks:** Use Hugo's native fenced code blocks with Chroma options (e.g. `{filename="main.js" linenos=true hl_lines=[1]}`).
* **Code with explanations:** Use the new `annotated` shortcode.
* **Code tabs:** Use the general `tabs` and `tab` shortcodes.

## Changed Separators (`<---->` to `---`)

In Hudocs 1.8, the `columns` and `code` shortcodes used `<---->` as an internal delimiter:

```markdown
{{</* columns */>}}
Left column
<---->
Right column
{{</* /columns */>}}
```

In Hudocs 2.0, replace all `<---->` delimiters with standard Markdown horizontal rules (`---`) or `<!-- split -->`:

```markdown
{{</* columns */>}}
Left column
---
Right column
{{</* /columns */>}}
```

## Renamed Configuration Parameters

Configuration parameters in `hugo.toml` under `[params]` have been standardized with semantic prefixes (`docs_`, `brand_`, `footer_`):

| Old Parameter (v1.8) | New Parameter (v2.0) | Description                                       |
| :------------------- | :------------------- | :------------------------------------------------ |
| `github_repo_edit`   | `docs_edit_url`      | Base URL for the "Edit this page" button.         |
| `main_icon`          | `brand_icon`         | Meteor icon displayed in the navbar header.       |
| `main_logo`          | `brand_logo`         | Path to the header brand logo.                    |
| `badge_text`         | `docs_badge_text`    | Default text for documentation badges.            |
| `badge_url`          | `docs_badge_url`     | Default link for documentation badges.            |
| `expand_tree`        | `docs_expand_tree`   | Expand all navigation sections by default.        |
| `pagination`         | `docs_pagination`    | Enable previous/next links on doc pages.          |
| `date_format`        | `footer_date_format` | Format for page modified dates in the footer.     |
| `copyright`          | `footer_copyright`   | Footer copyright notice text.                     |

Update your `hugo.toml` file to use the new parameter names.

## Shortcode Syntax Changes

### `tab` Shortcode

In Hudocs 1.8, `tab` was tied to the `code` shortcode and accepted positional arguments for language and file name.

In Hudocs 2.0, `tab` is an independent shortcode nested inside `tabs` and takes the tab title as its first argument or named parameter:

````markdown
{{</* tabs */>}}
{{</* tab "JavaScript" */>}}
```javascript {filename="main.js"}
console.log("Hello");
```
{{</* /tab */>}}
{{</* /tabs */>}}
````

### `pagelink` Parameters

In Hudocs 1.8, `pagelink` used `name` to indicate origin or secondary text. In Hudocs 2.0, use `title` for the primary title and `description` (or `subtitle`) for descriptive text:

```markdown
{{</* pagelink href="/docs/latest/getting-started" title="Getting Started" description="Setup guide" icon="rocket" */>}}
```
