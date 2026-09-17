---
title: Syntax Highlighting
weight: 4
---

HuDocs uses Hugo's fenced code blocks to display code examples. In addition to syntax highlighting, these blocks provide several options for customizing their presentation.

This page covers some of the most useful options. For all available options, see the [official Hugo documentation](https://gohugo.io/content-management/syntax-highlighting/).

## File name

You can display the file name at the top of a code block using `filename`.

```javascript {filename="main.js"}
const app = document.querySelector("#app");

app.textContent = "Hello, world!";
```

## Line numbers

You can display line numbers alongside the code.

```html {linenos=true}
<main class="hero">
  <h1>Welcome to HuDocs</h1>
  <p>Build beautiful documentation with Hugo.</p>
  <a href="/docs/">Read the documentation</a>
</main>
```

You can also display them inside the code block using `inline`.

```css {linenos=inline}
.hero {
  display: grid;
  gap: 1rem;
  max-width: 40rem;
}

.hero a {
  text-decoration: none;
}
```

## Highlight lines

The `hl_lines` option allows you to highlight specific lines in the code block.

```javascript {hl_lines=[2]}
const greeting = "Hello World";
const name = "Daniel";

console.log(`${greeting}, ${name}`);
```

You can also highlight a range of lines.

```json {hl_lines=["2-4"]}
{
  "name": "hudocs",
  "version": "2.0.0",
  "license": "MIT"
}
```

## Change the starting line number

When line numbers are enabled, `lineNoStart` allows you to set the number used for the first line.

```go {linenos=true lineNoStart=10}
func main() {
    message := "Hello, world!"
    fmt.Println(message)
}
```

The block above starts at line `10`.

## Line anchors

You can turn line numbers into anchors using `anchorLineNos`.

```bash {linenos=true anchorLineNos=true}
hugo new content/docs/getting-started.md
hugo server
```

`lineAnchors` allows you to add a prefix to these identifiers. This is useful when a page contains multiple code blocks with line numbers.

```yaml {linenos=true anchorLineNos=true lineAnchors=config}
markup:
  highlight:
    noClasses: false
    lineNos: true
    lineNumbersInTable: true
```

These are just some of the options available for fenced code blocks. See the [Hugo documentation on syntax highlighting](https://gohugo.io/content-management/syntax-highlighting/) for the rest.
