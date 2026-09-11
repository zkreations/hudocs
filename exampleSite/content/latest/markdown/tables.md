---
title: Tables
weight: 1
---

Hudocs 2.0 supports Markdown tables through Hugo's built-in render hook. Tables use standard Markdown syntax and do not require custom shortcodes.

## Native Markdown Syntax

Write tables using the standard GitHub Flavored Markdown (GFM) syntax. The table is processed automatically when the site is built:

```markdown
| Column 1 | Column 2 | Column 3 |
| :------- | :------- | :------- |
| Row 1    | Value A  | Value B  |
| Row 2    | Value C  | Value D  |
```

## Horizontal Scrolling

In Hudocs 2.0, each Markdown table is processed by the `render-table.html` render hook, which adds the `.article-table` container to allow horizontal scrolling when the table exceeds the available width:

```html
<div class="article-table">
  {{- .WrappedTable -}}
</div>
```

## Column Alignment

Align column content by using colons in the separator row:

* **Left-aligned:** `:---`
* **Centered:** `:---:`
* **Right-aligned:** `---:`

```markdown
| Left  | Center | Right  |
| :---- | :----: | -----: |
| Alpha | Beta   | 1,000  |
| Gamma | Delta  | 25,000 |
```

The result is:

| Left  | Center | Right  |
| :---- | :----: | -----: |
| Alpha | Beta   | 1,000  |
| Gamma | Delta  | 25,000 |

## Removal of the `table` Shortcode

In Hudocs 1.x, tables had to be wrapped in the `table` shortcode. In Hudocs 2.0, the `table` shortcode was removed.

If your documentation contains tables, remove the opening and closing `table` shortcode tags and keep the standard Markdown syntax.
