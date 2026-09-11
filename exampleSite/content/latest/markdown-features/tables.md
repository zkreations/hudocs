---
title: Tables
icon: table
weight: 1
---

Hudocs 2.0 provides native, fully responsive Markdown tables using Hugo's built-in table render hook. You can write clean, standard Markdown tables without wrapping them in custom shortcodes.

## Native Markdown Syntax

Write your tables using standard GFM (GitHub Flavored Markdown) syntax:

```markdown
| Feature | Hudocs 1.x | Hudocs 2.0 |
| :--- | :---: | :---: |
| Responsive Tables | Required shortcode | Native Render Hook |
| Tooltip System | Custom CSS | Native `title` |
| Style Architecture | `_utils.scss` | CSS `@layer` |
| Table of Contents | Scroll listeners | `IntersectionObserver` |
| Code Tab IDs | Random shuffle | Deterministic |
```

### Rendered Output

| Feature | Hudocs 1.x | Hudocs 2.0 |
| :--- | :---: | :---: |
| Responsive Tables | Required shortcode | Native Render Hook |
| Tooltip System | Custom CSS | Native `title` |
| Style Architecture | `_utils.scss` | CSS `@layer` |
| Table of Contents | Scroll listeners | `IntersectionObserver` |
| Code Tab IDs | Random shuffle | Deterministic |

## Built-in Responsive Scroll Hook

In Hudocs 2.0, every Markdown table is processed by `_default/_markup/render-table.html`:

```html
<div class="article-table">
  {{- .WrappedTable -}}
</div>
```

On narrow mobile displays, when tables contain multiple columns or detailed text, the `.article-table` container enables smooth horizontal scrolling without breaking the document layout or overflowing page boundaries.

## Alignment Support

Align column content using colons in the separator row:

- **Left-aligned**: `:---`
- **Centered**: `:---:`
- **Right-aligned**: `---:`

```markdown
| Left Aligned | Centered | Right Aligned |
| :--- | :---: | ---: |
| Alpha | Beta | 1,000 |
| Gamma | Delta | 25,000 |
```

| Left Aligned | Centered | Right Aligned |
| :--- | :---: | ---: |
| Alpha | Beta | 1,000 |
| Gamma | Delta | 25,000 |

## Notice: `table` Shortcode Removed in v2.0

{{< hint info >}}
**Upgrade Notice**: In Hudocs 1.x, tables required wrapping in <code>&#123;&#123;&lt; table &gt;&#125;&#125;...&#123;&#123;&lt; /table &gt;&#125;&#125;</code>. In **Hudocs 2.0**, that shortcode has been **completely removed**. You can safely remove the wrapper tags from your Markdown files; Hugo and Hudocs format them natively.
{{< /hint >}}
