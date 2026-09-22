<p align="center">
  <img src="https://raw.githubusercontent.com/zkreations/hudocs/refs/heads/main/images/logo.png" width="75" alt="Hudocs" />
  <h1 align="center">Hudocs</h1>
</p>

<p align="center">Documentation theme for Hugo. No Node.js dependencies and no complex deployment pipelines. Built entirely with Hugo Extended's native asset pipeline.</p>

<p align="center">
  <a href="https://github.com/zkreations/hudocs/blob/main/LICENSE"><img src="https://img.shields.io/github/license/zkreations/hudocs?style=for-the-badge&labelColor=030712&color=14b8a6" alt="license"></a>
  <a href="https://github.com/zkreations/hudocs/releases"><img src="https://img.shields.io/github/v/release/zkreations/hudocs?style=for-the-badge&labelColor=030712&color=0ea5e9" alt="release"></a>
  <a href="https://app.netlify.com/projects/hudocs/deploys"><img src="https://img.shields.io/netlify/4f5686e0-d6f8-4ff8-ba4e-901d19644dfe?style=for-the-badge&labelColor=030712&color=6366f1" alt="netlify"></a>
</p>

<p align="center">
  <a href="https://hudocs.com/"><strong>View a live demo →</strong></a>
</p>

![cover](https://raw.githubusercontent.com/zkreations/hudocs/main/images/cover.png)

## Why Hudocs?

- **Single-version and multi-version support:** Works for continuously evolving products (SaaS, web apps) and for software with semantic versioning. Multi-version mode generates an isolated navigation tree, search index, and version selector for each release in the same build.
- **No Node.js required:** No `package.json`, no `node_modules`, no CI/CD orchestration beyond a standard Hugo build.
- **Fast builds:** Hugo's native pipeline handles compilation across multiple versions and languages without added overhead.
- **Client-side search:** Local search modal powered by [FlexSearch](https://github.com/nextapps-de/flexsearch), with isolated index files per language and version generated at build time.
- **Performance and security:** Optimized for [Core Web Vitals](https://pagespeed.web.dev/report?url=https://hudocs.com) with an A+ rating on [Mozilla Observatory](https://observatory.mozilla.org/analyze/hudocs.com).
- **Multilingual support (i18n):** Multi-language support linked through Hugo's i18n conventions.
- **Authoring features:** Dark/light scheme switcher, customizable code blocks with six built-in Duotone themes, tabs, steps, hints/alerts, annotated code snippets, data type badges, and [Meteor Icons](https://meteoricons.com/) integration.
- **Blog support:** Optional posts section with pagination, post cards, date formatting, and RSS feed.
- **AI assistant:** Configurable dropdown in article headers with direct actions for ChatGPT and Claude, prefilled with page context.

## Documentation

Full documentation covering installation, configuration, shortcodes, translations, and customization is available at [hudocs.com](https://hudocs.com/docs/latest/getting-started/installation/).

## Documentation Structure

Hudocs adapts automatically based on your directory layout.

### Single-version mode

For products that evolve continuously without versioned releases. Place documentation directly inside `content/docs/`:

```text
content/
└── docs/
    ├── _index.md
    ├── getting-started.md
    └── configuration.md
```

Navigation and URLs remain clean with no version dropdown.

### Multi-version mode

For software with semantic versioning where users need access to older release docs. Organize versions as subdirectories inside `content/docs/`:

```text
content/
└── docs/
    ├── latest/
    │   ├── _index.md
    │   └── ...
    ├── 1.8/
    │   ├── _index.md
    │   └── ...
    └── 1.0/
        ├── _index.md
        └── ...
```

## Shortcodes

| Shortcode | Description |
| :--- | :--- |
| `{{< steps >}}` | Renders ordered lists as numbered step-by-step guides |
| `{{< tabs >}}` / `{{< tab >}}` | Tabbed content with automatic merging of consecutive syntax tabs |
| `{{< annotated >}}` | Pairs code, tabs, or tables with explanatory notes |
| `{{< types >}}` | Formats data types, expressions, and parameter structures with badge styles |
| `{{< hint >}}` | Hint or alert block (`info`, `warning`, `danger`, `success`) |
| `{{< button >}}` | Button with primary/secondary variants and language-aware link resolution |
| `{{< pagelink >}}` | Styled link card with title and description |
| `{{< columns >}}` | Multi-column layout |

## Requirements

- Hugo Extended 0.164.0 or higher
- [Git](https://git-scm.com/downloads)

## Installation

In the root directory of your Hugo project, add Hudocs as a Git submodule:

```bash
git submodule add https://github.com/zkreations/hudocs themes/hudocs
```

## Quick Start

```bash
# Copy example content
cp -R themes/hudocs/exampleSite/content .

# Copy example configuration
cp themes/hudocs/exampleSite/hugo.toml .

# Start the local development server
hugo serve
```

## Contributions

Contributions are welcome. Please keep these principles in mind:

- Keep configuration simple and avoid unnecessary complexity.
- Favor native HTML and CSS over JavaScript wherever possible.
- Respect user-level customization hooks and tokens.

## Support

If you find this project useful, consider [starring it on GitHub](https://github.com/zkreations/hudocs/stargazers) or [buying me a coffee](https://ko-fi.com/zkreations) to support ongoing maintenance.

## License

**Hudocs** is licensed under the [MIT License](LICENSE)
